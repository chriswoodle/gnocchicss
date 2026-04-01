import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { addNegativeRules, renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Order implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            ...addNegativeRules([
                { name: "order-1", rule: "order: 1;" },
                { name: "order-2", rule: "order: 2;" },
                { name: "order-3", rule: "order: 3;" },
                { name: "order-4", rule: "order: 4;" },
                { name: "order-5", rule: "order: 5;" },
                { name: "order-6", rule: "order: 6;" },
                { name: "order-7", rule: "order: 7;" },
                { name: "order-8", rule: "order: 8;" },
                { name: "order-9", rule: "order: 9;" },
                { name: "order-10", rule: "order: 10;" },
                { name: "order-11", rule: "order: 11;" },
                { name: "order-12", rule: "order: 12;" },
            ]),
            {
                name: "order-first",
                rule: "order: -9999;"
            },
            {
                name: "order-last",
                rule: "order: 9999;"
            },
            {
                name: "order-none",
                rule: "order: 0;"
            }
        ].map(r => ({ ...r, category: 'flexbox-and-grid', section: 'order' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}