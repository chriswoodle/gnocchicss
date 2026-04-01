import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Justify implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "justify-normal", rule: "justify-content: normal;" },
            { name: "justify-start", rule: "justify-content: flex-start;" },
            { name: "justify-end", rule: "justify-content: flex-end;" },
            { name: "justify-center", rule: "justify-content: center;" },
            { name: "justify-between", rule: "justify-content: space-between;" },
            { name: "justify-around", rule: "justify-content: space-around;" },
            { name: "justify-evenly", rule: "justify-content: space-evenly;" },
            { name: "justify-stretch", rule: "justify-content: stretch;" },

            { name: "justify-items-start", rule: "justify-items: start;" },
            { name: "justify-items-end", rule: "justify-items: end;" },
            { name: "justify-items-center", rule: "justify-items: center;" },
            { name: "justify-items-stretch", rule: "justify-items: stretch;" },

            { name: "justify-self-auto", rule: "justify-self: auto;" },
            { name: "justify-self-start", rule: "justify-self: start;" },
            { name: "justify-self-end", rule: "justify-self: end;" },
            { name: "justify-self-center", rule: "justify-self: center;" },
            { name: "justify-self-stretch", rule: "justify-self: stretch;" },
        ].map(r => ({ ...r, category: 'flexbox-and-grid', section: 'justify' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}