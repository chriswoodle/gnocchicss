import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ColorName, GeneratedPartial, Rule, RuleGenerator, Shades, UserConfig } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class Shadow implements RuleGenerator {
    constructor(
        @Inject() private readonly config: ConfigService<UserConfig>
    ) { }
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "shadow-inherit", rule: "--g-shadow-color: inherit;" },
            { name: "shadow-current", rule: "--g-shadow-color: currentColor;" },
            { name: "shadow-transparent", rule: "--g-shadow-color: transparent;" },
            { name: "shadow-black", rule: "--g-shadow-color: #000;" },
            { name: "shadow-white", rule: "--g-shadow-color: #fff;" },

            ...Object.entries(this.config.get('colors', { infer: true })).map(([color, shades]) => this.generateShadow(color, shades)).flat(),

            { name: "shadow-sm", rule: "box-shadow: 0 1px 2px 0 var(--g-shadow-color,rgb(0 0 0 / 0.05));" },
            { name: "shadow", rule: "box-shadow: 0 1px 3px 0 var(--g-shadow-color,rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--g-shadow-color,rgb(0 0 0 / 0.1));" },
            { name: "shadow-md", rule: "box-shadow: 0 4px 6px -1px var(--g-shadow-color,rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--g-shadow-color,rgb(0 0 0 / 0.1));" },
            { name: "shadow-lg", rule: "box-shadow: 0 10px 15px -3px var(--g-shadow-color,rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--g-shadow-color,rgb(0 0 0 / 0.1));" },
            { name: "shadow-xl", rule: "box-shadow: 0 20px 25px -5px var(--g-shadow-color,rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--g-shadow-color,rgb(0 0 0 / 0.1));" },
            { name: "shadow-2xl", rule: "box-shadow: 0 25px 50px -12px var(--g-shadow-color,rgb(0 0 0 / 0.25));" },
            { name: "shadow-inner", rule: "box-shadow: inset 0 2px 4px 0 var(--g-shadow-color,rgb(0 0 0 / 0.05));" },
            { name: "shadow-none", rule: "box-shadow: 0 0 #0000;" },
        ];

        return {
            rules,
            output: renderRules(rules)
        }
    }

    generateShadow(color: ColorName, shades: Shades): Rule[] {
        return Object.entries(shades)
            .map(([key, shade]) => {
                const result: Rule[] = [
                    { name: `shadow-${color}-${key}`, rule: `--g-shadow-color: ${shade};` },
                    ...this.config.get('opacity', { infer: true }).map((opacity) => ({ name: `shadow-${color}-${key}/${opacity[0]}`, rule: `--g-shadow-color: rgba(${shade}, ${opacity[1]});` })),
                ]
                if (key === '500') {
                    result.push({ name: `shadow-${color}`, rule: `--g-shadow-color: ${shade};` });
                    result.push(...this.config.get('opacity', { infer: true }).map((opacity) => ({ name: `shadow-${color}/${opacity[0]}`, rule: `--g-shadow-color: rgba(${shade}, ${opacity[1]});` })));
                }
                return result;
            }).flat();
    }
}

