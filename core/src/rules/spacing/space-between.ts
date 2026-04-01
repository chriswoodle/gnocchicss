import { BASE_REM, SIZES } from "../../constants.js";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { addNegativeRules, renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class SpaceBetween implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            ...[
                { name: "space-x-0", rule: "> *:not(:first-child) { margin-left: 0; }" },
                { name: "space-x-px", rule: "> *:not(:first-child) { margin-left: 1px; }" },
                { name: "space-x-reverse", rule: "> *:not(:first-child) { --tw-space-x-reverse: 1; }" },
                ...addNegativeRules([
                    ...SIZES.map((size) => ({
                        name: `space-x-${size}`,
                        rule: `> *:not(:first-child) { margin-left: ${size * BASE_REM}rem; /* ${size * 4}px */ }`
                    })),
                ]),
            ].map(r => ({ ...r, subsection: 'space-x', })),
            ...[
                { name: "space-y-0", rule: "> *:not(:first-child) { margin-top: 0; }" },
                { name: "space-y-px", rule: "> *:not(:first-child) { margin-top: 1px; }" },
                { name: "space-y-reverse", rule: "> *:not(:first-child) { --tw-space-y-reverse: 1; }" },
                ...addNegativeRules([
                    ...SIZES.map((size) => ({
                        name: `space-y-${size}`,
                        rule: `> *:not(:first-child) { margin-top: ${size * BASE_REM}rem; /* ${size * 4}px */ }`
                    })),
                ])
            ].map(r => ({ ...r, subsection: 'space-y', })),
        ].map(r => ({ ...r, category: 'spacing', section: 'space-between' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}