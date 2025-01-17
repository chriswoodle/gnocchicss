import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ColorName, GeneratedPartial, Rule, RuleGenerator, Shades, UserConfig } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class DivideColor implements RuleGenerator {
    constructor(
        @Inject() private readonly config: ConfigService<UserConfig>
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "divide-inherit", rule: "> *:not(:first-child) { border-color: inherit; }" },
            { name: "divide-current", rule: "> *:not(:first-child) { border-color: currentColor; }" },
            { name: "divide-transparent", rule: "> *:not(:first-child) { border-color: transparent; }" },

            { name: "divide-black", rule: "> *:not(:first-child) { border-color: rgb(0 0 0); }" },
            ...this.config.get('opacity', { infer: true }).map((opacity) => ({ name: `divide-black/${opacity[0]}`, rule: ` > *:not(:first-child) { border-color: rgba(0, 0, 0, ${opacity[1]}); }` })),

            { name: "divide-white", rule: "> *:not(:first-child) { border-color: rgb(255 255 255); }" },
            ...this.config.get('opacity', { infer: true }).map((opacity) => ({ name: `divide-white/${opacity[0]}`, rule: ` > *:not(:first-child) { border-color: rgba(255, 255, 255, ${opacity[1]}); }` })),

            ...Object.entries(this.config.get('colors', { infer: true })).map(([color, shades]) => this.generateColorRules(color, shades)).flat(),
        ];

        return {
            output: renderRules(rules)
        }
    }

    generateColorRules(color: ColorName, shades: Shades): Rule[] {
        if (typeof shades === 'string') {
            return [
                { name: `divide-${color}`, rule: `> *:not(:first-child) { border-color: ${shades}; }` },
                ...this.config.get('opacity', { infer: true }).map((opacity) => ({ name: `divide-${color}/${opacity[0]}`, rule: ` > *:not(:first-child) { border-color: rgba(${shades}, ${opacity[1]}); }` }))
            ];
        }

        return Object.entries(shades)
            .map(([key, shade]) => {
                const result: Rule[] = [
                    { name: `divide-${color}-${key}`, rule: `> *:not(:first-child) { border-color: ${shade}; }` },
                    ...this.config.get('opacity', { infer: true }).map((opacity) => ({ name: `divide-${color}-${key}/${opacity[0]}`, rule: ` > *:not(:first-child) { border-color: rgba(${shade}, ${opacity[1]}); }` })),
                ];
                if (key === '500') {
                    result.push({ name: `divide-${color}`, rule: `> *:not(:first-child) { border-color: ${shade}; }` });
                    result.push(...this.config.get('opacity', { infer: true }).map((opacity) => ({ name: `divide-${color}/${opacity[0]}`, rule: ` > *:not(:first-child) { border-color: rgba(${shade}, ${opacity[1]}); }` })));
                }

                return result;
            }).flat();
    }
}

