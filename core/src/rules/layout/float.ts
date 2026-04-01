import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Float implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "float-start", rule: "float: inline-start;" },
            { name: "float-end", rule: "float: inline-end;" },
            { name: "float-right", rule: "float: right;" },
            { name: "float-left", rule: "float: left;" },
            { name: "float-none", rule: "float: none;" },
        ].map(r => ({ ...r, category: 'layout', section: 'float' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}