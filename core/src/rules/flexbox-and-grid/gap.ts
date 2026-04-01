import { BASE_REM, SIZES } from "../../constants.js";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Gap implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "gap-0", rule: "gap: 0;" },
            { name: "gap-px", rule: "gap: 1px;" },
            ...SIZES.map((size) => ({
                name: `gap-${size}`,
                rule: `gap: ${size * BASE_REM}rem; /* ${size * 4}px */`
            })).map(r => ({ subsection: 'gap', ...r })),
            { name: "gap-x-0", rule: "column-gap: 0;" },
            { name: "gap-x-px", rule: "column-gap: 1px;" },
            ...SIZES.map((size) => ({
                name: `gap-x-${size}`,
                rule: `column-gap: ${size * BASE_REM}rem; /* ${size * 4}px */`
            })).map(r => ({ subsection: 'gap-x', ...r })),
            { name: "gap-y-0", rule: "row-gap: 0;" },
            { name: "gap-y-px", rule: "row-gap: 1px;" },
            ...SIZES.map((size) => ({
                name: `gap-y-${size}`,
                rule: `row-gap: ${size * BASE_REM}rem; /* ${size * 4}px */`
            })).map(r => ({ subsection: 'gap-y', ...r })),
        ].map(r => ({ ...r, category: 'flexbox-and-grid', section: 'gap' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}