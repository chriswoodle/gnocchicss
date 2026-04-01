import { ColorName, GeneratedPartial, Rule, RuleGenerator, Shades, UserConfig } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class BorderColor implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "border-inherit", rule: "border-color: inherit;" },
            { name: "border-current", rule: "border-color: currentColor;" },
            { name: "border-transparent", rule: "border-color: transparent;" },
            ...[
                { name: "border-black", rule: "border-color: rgb(0 0 0);" },
                ...this.config.opacity.map((opacity) => ({ name: `border-black/${opacity[0]}`, rule: `border-color: rgba(0, 0, 0, ${opacity[1]});` })),
                { name: "border-x-black", rule: "border-left-color: rgb(0 0 0); border-right-color: rgb(0 0 0);" },
                ...this.config.opacity.map((opacity) => ({ name: `border-x-black/${opacity[0]}`, rule: `border-left-color: rgba(0, 0, 0, ${opacity[1]}); border-right-color: rgba(0, 0, 0, ${opacity[1]});` })),
                { name: "border-y-black", rule: "border-top-color: rgb(0 0 0); border-bottom-color: rgb(0 0 0);" },
                ...this.config.opacity.map((opacity) => ({ name: `border-y-black/${opacity[0]}`, rule: `border-top-color: rgba(0, 0, 0, ${opacity[1]}); border-bottom-color: rgba(0, 0, 0, ${opacity[1]});` })),
                { name: "border-t-black", rule: "border-top-color: rgb(0 0 0);" },
                ...this.config.opacity.map((opacity) => ({ name: `border-t-black/${opacity[0]}`, rule: `border-top-color: rgba(0, 0, 0, ${opacity[1]});` })),
                { name: "border-r-black", rule: "border-right-color: rgb(0 0 0);" },
                ...this.config.opacity.map((opacity) => ({ name: `border-r-black/${opacity[0]}`, rule: `border-right-color: rgba(0, 0, 0, ${opacity[1]});` })),
                { name: "border-b-black", rule: "border-bottom-color: rgb(0 0 0);" },
                ...this.config.opacity.map((opacity) => ({ name: `border-b-black/${opacity[0]}`, rule: `border-bottom-color: rgba(0, 0, 0, ${opacity[1]});` })),
                { name: "border-l-black", rule: "border-left-color: rgb(0 0 0);" },
                ...this.config.opacity.map((opacity) => ({ name: `border-l-black/${opacity[0]}`, rule: `border-left-color: rgba(0, 0, 0, ${opacity[1]});` })),
                { name: "border-s-black", rule: "border-inline-start-color: rgb(0 0 0);" },
                ...this.config.opacity.map((opacity) => ({ name: `border-s-black/${opacity[0]}`, rule: `border-inline-start-color: rgba(0, 0, 0, ${opacity[1]});` })),
                { name: "border-e-black", rule: "border-inline-end-color: rgb(0 0 0);" },
                ...this.config.opacity.map((opacity) => ({ name: `border-e-black/${opacity[0]}`, rule: `border-inline-end-color: rgba(0, 0, 0, ${opacity[1]});` })),
            ].map(r => ({ subsection: "border-black", ...r })),
            ...[
                { name: "border-white", rule: "border-color: rgb(255 255 255);" },
                ...this.config.opacity.map((opacity) => ({ name: `border-white/${opacity[0]}`, rule: `border-color: rgba(255, 255, 255, ${opacity[1]});` })),
                { name: "border-x-white", rule: "border-left-color: rgb(255 255 255); border-right-color: rgb(255 255 255);" },
                ...this.config.opacity.map((opacity) => ({ name: `border-x-white/${opacity[0]}`, rule: `border-left-color: rgba(255, 255, 255, ${opacity[1]}); border-right-color: rgba(255, 255, 255, ${opacity[1]});` })),
                { name: "border-y-white", rule: "border-top-color: rgb(255 255 255); border-bottom-color: rgb(255 255 255);" },
                ...this.config.opacity.map((opacity) => ({ name: `border-y-white/${opacity[0]}`, rule: `border-top-color: rgba(255, 255, 255, ${opacity[1]}); border-bottom-color: rgba(255, 255, 255, ${opacity[1]});` })),
                { name: "border-t-white", rule: "border-top-color: rgb(255 255 255);" },
                ...this.config.opacity.map((opacity) => ({ name: `border-t-white/${opacity[0]}`, rule: `border-top-color: rgba(255, 255, 255, ${opacity[1]});` })),
                { name: "border-r-white", rule: "border-right-color: rgb(255 255 255);" },
                ...this.config.opacity.map((opacity) => ({ name: `border-r-white/${opacity[0]}`, rule: `border-right-color: rgba(255, 255, 255, ${opacity[1]});` })),
                { name: "border-b-white", rule: "border-bottom-color: rgb(255 255 255);" },
                ...this.config.opacity.map((opacity) => ({ name: `border-b-white/${opacity[0]}`, rule: `border-bottom-color: rgba(255, 255, 255, ${opacity[1]});` })),
                { name: "border-l-white", rule: "border-left-color: rgb(255 255 255);" },
                ...this.config.opacity.map((opacity) => ({ name: `border-l-white/${opacity[0]}`, rule: `border-left-color: rgba(255, 255, 255, ${opacity[1]});` })),
                { name: "border-s-white", rule: "border-inline-start-color: rgb(255 255 255);" },
                ...this.config.opacity.map((opacity) => ({ name: `border-s-white/${opacity[0]}`, rule: `border-inline-start-color: rgba(255, 255, 255, ${opacity[1]});` })),
                { name: "border-e-white", rule: "border-inline-end-color: rgb(255 255 255);" },
                ...this.config.opacity.map((opacity) => ({ name: `border-e-white/${opacity[0]}`, rule: `border-inline-end-color: rgba(255, 255, 255, ${opacity[1]});` })),
            ].map(r => ({ subsection: "border-white", ...r })),
            ...Object.entries(this.config.colors).map(([color, shades]) => this.generateColorRules(color, shades)).flat(),
        ].map(r => ({ ...r, category: 'border', section: 'border-color' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
    generateColorRules(color: ColorName, shades: Shades): Rule[] {
        if (typeof shades === 'string') {
            return [
                { name: `border-${color}`, rule: `border-color: ${shades};` },
                ...this.config.opacity.map((opacity) => ({ name: `border-${color}/${opacity[0]}`, rule: `border-color: rgba(${shades}, ${opacity[1]});` }))
            ].map(r => ({ subsection: `border-${color}`, ...r }));
        }

        return Object.entries(shades)
            .map(([key, shade]) => {
                const result: Rule[] = [
                    { name: `border-${color}-${key}`, rule: `border-color: ${shade};` },
                    ...this.config.opacity.map((opacity) => ({ name: `border-${color}-${key}/${opacity[0]}`, rule: `border-color: rgba(${shade}, ${opacity[1]});` })),
                    ...this.config.opacity.map((opacity) => ({ name: `border-x-${color}-${key}/${opacity[0]}`, rule: `border-left-color: rgba(${shade}, ${opacity[1]}); border-right-color: rgba(${shade}, ${opacity[1]});` })),
                    ...this.config.opacity.map((opacity) => ({ name: `border-y-${color}-${key}/${opacity[0]}`, rule: `border-top-color: rgba(${shade}, ${opacity[1]}); border-bottom-color: rgba(${shade}, ${opacity[1]});` })),
                    ...this.config.opacity.map((opacity) => ({ name: `border-t-${color}-${key}/${opacity[0]}`, rule: `border-top-color: rgba(${shade}, ${opacity[1]});` })),
                    ...this.config.opacity.map((opacity) => ({ name: `border-r-${color}-${key}/${opacity[0]}`, rule: `border-right-color: rgba(${shade}, ${opacity[1]});` })),
                    ...this.config.opacity.map((opacity) => ({ name: `border-b-${color}-${key}/${opacity[0]}`, rule: `border-bottom-color: rgba(${shade}, ${opacity[1]});` })),
                    ...this.config.opacity.map((opacity) => ({ name: `border-l-${color}-${key}/${opacity[0]}`, rule: `border-left-color: rgba(${shade}, ${opacity[1]});` })),
                    ...this.config.opacity.map((opacity) => ({ name: `border-s-${color}-${key}/${opacity[0]}`, rule: `border-inline-start-color: rgba(${shade}, ${opacity[1]});` })),
                    ...this.config.opacity.map((opacity) => ({ name: `border-e-${color}-${key}/${opacity[0]}`, rule: `border-inline-end-color: rgba(${shade}, ${opacity[1]});` })),
                ];
                if (key === '500') {
                    result.push({ name: `border-${color}`, rule: `border-color: ${shade};` });
                    result.push(...this.config.opacity.map((opacity) => ({ name: `border-${color}/${opacity[0]}`, rule: `border-color: rgba(${shade}, ${opacity[1]});` })));
                    result.push(...this.config.opacity.map((opacity) => ({ name: `border-x-${color}/${opacity[0]}`, rule: `border-left-color: rgba(${shade}, ${opacity[1]}); border-right-color: rgba(${shade}, ${opacity[1]});` })));
                    result.push(...this.config.opacity.map((opacity) => ({ name: `border-y-${color}/${opacity[0]}`, rule: `border-top-color: rgba(${shade}, ${opacity[1]}); border-bottom-color: rgba(${shade}, ${opacity[1]});` })));
                    result.push(...this.config.opacity.map((opacity) => ({ name: `border-t-${color}/${opacity[0]}`, rule: `border-top-color: rgba(${shade}, ${opacity[1]});` })));
                    result.push(...this.config.opacity.map((opacity) => ({ name: `border-r-${color}/${opacity[0]}`, rule: `border-right-color: rgba(${shade}, ${opacity[1]});` })));
                    result.push(...this.config.opacity.map((opacity) => ({ name: `border-b-${color}/${opacity[0]}`, rule: `border-bottom-color: rgba(${shade}, ${opacity[1]});` })));
                    result.push(...this.config.opacity.map((opacity) => ({ name: `border-l-${color}/${opacity[0]}`, rule: `border-left-color: rgba(${shade}, ${opacity[1]});` })));
                    result.push(...this.config.opacity.map((opacity) => ({ name: `border-s-${color}/${opacity[0]}`, rule: `border-inline-start-color: rgba(${shade}, ${opacity[1]});` })));
                    result.push(...this.config.opacity.map((opacity) => ({ name: `border-e-${color}/${opacity[0]}`, rule: `border-inline-end-color: rgba(${shade}, ${opacity[1]});` })));
                }

                return result.map(r => ({ subsection: `border-${color}`, ...r }));;
            }).flat();
    }

}
