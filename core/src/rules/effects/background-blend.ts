import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class BackgroundBlend implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "bg-blend-normal", rule: "background-blend-mode: normal;" },
            { name: "bg-blend-multiply", rule: "background-blend-mode: multiply;" },
            { name: "bg-blend-screen", rule: "background-blend-mode: screen;" },
            { name: "bg-blend-overlay", rule: "background-blend-mode: overlay;" },
            { name: "bg-blend-darken", rule: "background-blend-mode: darken;" },
            { name: "bg-blend-lighten", rule: "background-blend-mode: lighten;" },
            { name: "bg-blend-color-dodge", rule: "background-blend-mode: color-dodge;" },
            { name: "bg-blend-color-burn", rule: "background-blend-mode: color-burn;" },
            { name: "bg-blend-hard-light", rule: "background-blend-mode: hard-light;" },
            { name: "bg-blend-soft-light", rule: "background-blend-mode: soft-light;" },
            { name: "bg-blend-difference", rule: "background-blend-mode: difference;" },
            { name: "bg-blend-exclusion", rule: "background-blend-mode: exclusion;" },
            { name: "bg-blend-hue", rule: "background-blend-mode: hue;" },
            { name: "bg-blend-saturation", rule: "background-blend-mode: saturation;" },
            { name: "bg-blend-color", rule: "background-blend-mode: color;" },
            { name: "bg-blend-luminosity", rule: "background-blend-mode: luminosity;" },
        ].map(r => ({ ...r, category: 'effects', section: 'background-blend' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}
