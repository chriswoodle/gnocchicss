import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ColorName, GeneratedPartial, Rule, RuleGenerator, Shades, UserConfig } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class BackgroundColor implements RuleGenerator {
    constructor(
        @Inject() private readonly config: ConfigService<UserConfig>
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "bg-inherit", rule: "background-color: inherit;" },
            { name: "bg-current", rule: "background-color: currentColor;" },
            { name: "bg-transparent", rule: "background-color: transparent;" },
            { name: "bg-black", rule: "background-color: black;" },
            ...this.config.get('opacity', { infer: true }).map((opacity) => ({ name: `bg-black/${opacity[0]}`, rule: `background-color: rgba(0, 0, 0, ${opacity[1]});` })),
            { name: "bg-white", rule: "background-color: white;" },
            ...this.config.get('opacity', { infer: true }).map((opacity) => ({ name: `bg-white/${opacity[0]}`, rule: `background-color: rgba(255, 255, 255, ${opacity[1]});` })),
            ...Object.entries(this.config.get('colors', { infer: true })).map(([color, shades]) => this.generateColorRules(color, shades)).flat(),
        ];

        return {
            output: renderRules(rules)
        }
    }
    generateColorRules(color: ColorName, shades: Shades): Rule[] {
        if (typeof shades === 'string') {
            return [
                { name: `bg-${color}`, rule: `background-color: ${shades};` },
                ...this.config.get('opacity', { infer: true }).map((opacity) => ({ name: `bg-${color}/${opacity[0]}`, rule: `background-color: rgba(${shades}, ${opacity[1]});` }))
            ];
        }

        return Object.entries(shades)
            .map(([key, shade]) => {
                const result: Rule[] = [
                    { name: `bg-${color}-${key}`, rule: `background-color: ${shade};` },
                    ...this.config.get('opacity', { infer: true }).map((opacity) => ({ name: `bg-${color}-${key}/${opacity[0]}`, rule: `background-color: rgba(${shade}, ${opacity[1]});` }))
                ];
                if (key === '500') {
                    result.push({ name: `bg-${color}`, rule: `background-color: ${shade};` });
                    result.push(...this.config.get('opacity', { infer: true }).map((opacity) => ({ name: `bg-${color}/${opacity[0]}`, rule: `background-color: rgba(${shade}, ${opacity[1]});` })));
                }

                return result;
            }).flat();
    }
}



