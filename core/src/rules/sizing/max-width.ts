import { BASE_REM, SIZES } from "../../constants.js";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class MaxWidth implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "max-w-0",
                rule: "max-width: 0;"
            },
            {
                name: "max-w-px",
                rule: "max-width: 1px;"
            },
            {
                name: "max-w-full",
                rule: "max-width: 100%;"
            },
            {
                name: "max-w-min",
                rule: "max-width: min-content;"
            },
            {
                name: "max-w-max",
                rule: "max-width: max-content;"
            },
            {
                name: "max-w-fit",
                rule: "max-width: fit-content;"
            },
            ...SIZES.map((size) => ({
                name: `max-w-${size}`,
                rule: `max-width: ${size * BASE_REM}rem; /* ${size * 4}px */`
            })),
        ].map(r => ({ ...r, category: 'sizing', section: 'max-width' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}