import { ALL_FRACTIONS, BASE_REM, SIZES } from "../../constants.js";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class FlexBasis implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "basis-auto",
                rule: "flex-basis: auto;"
            },
            {
                name: "basis-0",
                rule: "flex-basis: 0;"
            },
            {
                name: "basis-px",
                rule: "flex-basis: 1px;"
            },

            ...[
                ...ALL_FRACTIONS.map(([name, value]) => ({
                    name: `basis-${name}`,
                    rule: `flex-basis: ${value * 100}%;`
                })),
            ].map(r => ({ subsection: 'basis-fractions', ...r })),

            ...[
                ...SIZES.map((size) => ({
                    name: `basis-${size}`,
                    rule: `flex-basis: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),
            ].map(r => ({ subsection: 'basis-sizes', ...r })),
        ].map(r => ({ ...r, category: 'flexbox-and-grid', section: 'flex-basis' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}