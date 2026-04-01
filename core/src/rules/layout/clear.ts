import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Clear implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "clear-start", rule: "clear: inline-start;" },
            { name: "clear-end", rule: "clear: inline-end;" },
            { name: "clear-left", rule: "clear: left;" },
            { name: "clear-right", rule: "clear: right;" },
            { name: "clear-both", rule: "clear: both;" },
            { name: "clear-none", rule: "clear: none;" },
        ].map(r => ({ ...r, category: 'layout', section: 'clear' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}