import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class DivideWidth implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "divide-x-0", rule: "> *:not(:first-child) { border-right-width: 0px; border-left-width: 0px; }" },
            { name: "divide-x-2", rule: "> *:not(:first-child) { border-right-width: 0px; border-left-width: 2px; }" },
            { name: "divide-x-4", rule: "> *:not(:first-child) { border-right-width: 0px; border-left-width: 4px; }" },
            { name: "divide-x-8", rule: "> *:not(:first-child) { border-right-width: 0px; border-left-width: 8px; }" },
            { name: "divide-x", rule: "> *:not(:first-child) { border-right-width: 0px; border-left-width: 1px; }" },
            { name: "divide-y-0", rule: "> *:not(:first-child) { border-top-width: 0px; border-bottom-width: 0px; }" },
            { name: "divide-y-2", rule: "> *:not(:first-child) { border-top-width: 2px; border-bottom-width: 0px; }" },
            { name: "divide-y-4", rule: "> *:not(:first-child) { border-top-width: 4px; border-bottom-width: 0px; }" },
            { name: "divide-y-8", rule: "> *:not(:first-child) { border-top-width: 8px; border-bottom-width: 0px; }" },
            { name: "divide-y", rule: "> *:not(:first-child) { border-top-width: 1px; border-bottom-width: 0px; }" },
        ].map(r => ({ ...r, category: 'border', section: 'divide-width' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}
