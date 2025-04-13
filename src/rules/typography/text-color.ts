import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ColorName, GeneratedPartial, Rule, RuleGenerator, Shades, UserConfig } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class TextColor implements RuleGenerator {
    constructor(
        @Inject() private readonly config: ConfigService<UserConfig>
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "text-current", rule: "color: currentColor;" },
            { name: "text-transparent", rule: "color: transparent;" },
            { name: "text-black", rule: "color: rgb(0 0 0);" },
            ...this.config.get('opacity', { infer: true }).map((opacity) => ({ name: `text-black/${opacity[0]}`, rule: `color: rgba(0, 0, 0, ${opacity[1]});` })),
            { name: "text-white", rule: "color: rgb(255 255 255);" },
            ...this.config.get('opacity', { infer: true }).map((opacity) => ({ name: `text-white/${opacity[0]}`, rule: `color: rgba(255, 255, 255, ${opacity[1]});` })),
            ...Object.entries(this.config.get('colors', { infer: true })).map(([color, shades]) => this.generateColorRules(color, shades)).flat(),
        ];

        return {
            rules,
            output: renderRules(rules)
        }
    }

    generateColorRules(color: ColorName, shades: Shades | string): Rule[] {
        if (typeof shades === 'string') {
            return [
                { name: `text-${color}`, rule: `color: ${shades};` },
                ...this.config.get('opacity', { infer: true }).map((opacity) => ({ name: `text-${color}/${opacity[0]}`, rule: `color: rgba(${shades}, ${opacity[1]});` }))
            ];
        }

        return Object.entries(shades)
            .map(([key, shade]) => {
                const result: Rule[] = [
                    { name: `text-${color}-${key}`, rule: `color: ${shade};` },
                    ...this.config.get('opacity', { infer: true }).map((opacity) => ({ name: `text-${color}-${key}/${opacity[0]}`, rule: `color: rgba(${shade}, ${opacity[1]});` }))
                ];
                if (key === '500') {
                    result.push({ name: `text-${color}`, rule: `color: ${shade};` });
                    result.push(...this.config.get('opacity', { infer: true }).map((opacity) => ({ name: `text-${color}/${opacity[0]}`, rule: `color: rgba(${shade}, ${opacity[1]});` })));
                }

                return result;
            })
            .flat();
    }
}



