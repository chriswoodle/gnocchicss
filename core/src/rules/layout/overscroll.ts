import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Overscroll implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "overscroll-auto", rule: "overscroll-behavior: auto;" },
            { name: "overscroll-contain", rule: "overscroll-behavior: contain;" },
            { name: "overscroll-none", rule: "overscroll-behavior: none;" },
            { name: "overscroll-y-auto", rule: "overscroll-behavior-y: auto;" },
            { name: "overscroll-y-contain", rule: "overscroll-behavior-y: contain;" },
            { name: "overscroll-y-none", rule: "overscroll-behavior-y: none;" },
            { name: "overscroll-x-auto", rule: "overscroll-behavior-x: auto;" },
            { name: "overscroll-x-contain", rule: "overscroll-behavior-x: contain;" },
            { name: "overscroll-x-none", rule: "overscroll-behavior-x: none;" },
        ].map(r => ({ ...r, category: 'layout', section: 'overscroll' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}