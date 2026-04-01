import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Align implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "content-normal", rule: "align-content: normal;" },
            { name: "content-center", rule: "align-content: center;" },
            { name: "content-start", rule: "align-content: flex-start;" },
            { name: "content-end", rule: "align-content: flex-end;" },
            { name: "content-between", rule: "align-content: space-between;" },
            { name: "content-around", rule: "align-content: space-around;" },
            { name: "content-evenly", rule: "align-content: space-evenly;" },
            { name: "content-baseline", rule: "align-content: baseline;" },
            { name: "content-stretch", rule: "align-content: stretch;" },

            { name: "items-start", rule: "align-items: flex-start;" },
            { name: "items-end", rule: "align-items: flex-end;" },
            { name: "items-center", rule: "align-items: center;" },
            { name: "items-baseline", rule: "align-items: baseline;" },
            { name: "items-stretch", rule: "align-items: stretch;" },

            { name: "self-auto", rule: "align-self: auto;" },
            { name: "self-start", rule: "align-self: flex-start;" },
            { name: "self-end", rule: "align-self: flex-end;" },
            { name: "self-center", rule: "align-self: center;" },
            { name: "self-stretch", rule: "align-self: stretch;" },
            { name: "self-baseline", rule: "align-self: baseline;" },
        ].map(r => ({ ...r, category: 'flexbox-and-grid', section: 'align' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}