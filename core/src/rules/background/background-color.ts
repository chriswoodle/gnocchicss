import { ColorName, GeneratedPartial, Rule, RuleGenerator, Shades, UserConfig } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class BackgroundColor implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "bg-inherit", rule: "background-color: inherit;" },
            { name: "bg-current", rule: "background-color: currentColor;" },
            { name: "bg-transparent", rule: "background-color: transparent;" },

            ...[
                { name: "bg-black", rule: "background-color: black;" },
                ...this.config.opacity.map((opacity) => ({ name: `bg-black/${opacity[0]}`, rule: `background-color: rgba(0, 0, 0, ${opacity[1]});` }))
            ].map((rule) => ({ ...rule, subsection: "bg-black", })),

            ...[
                { name: "bg-white", rule: "background-color: white;" },
                ...this.config.opacity.map((opacity) => ({ name: `bg-white/${opacity[0]}`, rule: `background-color: rgba(255, 255, 255, ${opacity[1]});` }))
            ].map((rule) => ({ ...rule, subsection: "bg-white", })),

            ...Object.entries(this.config.colors).map(([color, shades]) => this.generateColorRules(color, shades)).flat(),
        ].map(r => ({ ...r, category: 'background', section: 'background-color' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
    generateColorRules(color: ColorName, shades: Shades): Rule[] {
        if (typeof shades === 'string') {
            return [
                { name: `bg-${color}`, rule: `background-color: ${shades};` },
                ...this.config.opacity.map((opacity) => ({ name: `bg-${color}/${opacity[0]}`, rule: `background-color: rgba(${shades}, ${opacity[1]});` }))
            ].map((rule) => ({ ...rule, subsection: `bg-${color}`, }))
        }

        return Object.entries(shades)
            .map(([key, shade]) => {
                const result: Rule[] = [
                    { name: `bg-${color}-${key}`, rule: `background-color: ${shade};` },
                    ...this.config.opacity.map((opacity) => ({ name: `bg-${color}-${key}/${opacity[0]}`, rule: `background-color: rgba(${shade}, ${opacity[1]});` }))
                ];
                if (key === '500') {
                    result.push({ name: `bg-${color}`, rule: `background-color: ${shade};` });
                    result.push(...this.config.opacity.map((opacity) => ({ name: `bg-${color}/${opacity[0]}`, rule: `background-color: rgba(${shade}, ${opacity[1]});` })));
                }

                return result.map((rule) => ({ ...rule, subsection: `bg-${color}`, }));
            }).flat();
    }
}



