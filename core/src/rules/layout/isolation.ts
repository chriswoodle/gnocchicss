import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Isolation implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "isolate", rule: "isolation: isolate;" },
            { name: "isolation-auto", rule: "isolation: auto;" },
        ].map(r => ({ ...r, category: 'layout', section: 'isolation' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}