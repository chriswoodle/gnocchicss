import { BASE_REM, SIZES } from "../../constants.js";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class MinWidth implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "min-w-0", rule: "min-width: 0;" },
            { name: "min-w-px", rule: "min-width: 1px;" },
            { name: "min-w-full", rule: "min-width: 100%;" },
            { name: "min-w-min", rule: "min-width: min-content;" },
            { name: "min-w-max", rule: "min-width: max-content;" },
            { name: "min-w-fit", rule: "min-width: fit-content;" },
            ...SIZES.map((size) => ({
                name: `min-w-${size}`,
                rule: `min-width: ${size * BASE_REM}rem; /* ${size * 4}px */`
            })),
        ].map(r => ({ ...r, category: 'sizing', section: 'min-width' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}