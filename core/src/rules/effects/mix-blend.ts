import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class MixBlend implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "mix-blend-normal", rule: "mix-blend-mode: normal;" },
            { name: "mix-blend-multiply", rule: "mix-blend-mode: multiply;" },
            { name: "mix-blend-screen", rule: "mix-blend-mode: screen;" },
            { name: "mix-blend-overlay", rule: "mix-blend-mode: overlay;" },
            { name: "mix-blend-darken", rule: "mix-blend-mode: darken;" },
            { name: "mix-blend-lighten", rule: "mix-blend-mode: lighten;" },
            { name: "mix-blend-color-dodge", rule: "mix-blend-mode: color-dodge;" },
            { name: "mix-blend-color-burn", rule: "mix-blend-mode: color-burn;" },
            { name: "mix-blend-hard-light", rule: "mix-blend-mode: hard-light;" },
            { name: "mix-blend-soft-light", rule: "mix-blend-mode: soft-light;" },
            { name: "mix-blend-difference", rule: "mix-blend-mode: difference;" },
            { name: "mix-blend-exclusion", rule: "mix-blend-mode: exclusion;" },
            { name: "mix-blend-hue", rule: "mix-blend-mode: hue;" },
            { name: "mix-blend-saturation", rule: "mix-blend-mode: saturation;" },
            { name: "mix-blend-color", rule: "mix-blend-mode: color;" },
            { name: "mix-blend-luminosity", rule: "mix-blend-mode: luminosity;" },
            { name: "mix-blend-plus-darker", rule: "mix-blend-mode: plus-darker;" },
            { name: "mix-blend-plus-lighter", rule: "mix-blend-mode: plus-lighter;" },
        ].map(r => ({ ...r, category: 'effects', section: 'mix-blend' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}