import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Place implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "place-content-center", rule: "place-content: center;" },
            { name: "place-content-start", rule: "place-content: start;" },
            { name: "place-content-end", rule: "place-content: end;" },
            { name: "place-content-between", rule: "place-content: space-between;" },
            { name: "place-content-around", rule: "place-content: space-around;" },
            { name: "place-content-evenly", rule: "place-content: space-evenly;" },
            { name: "place-content-baseline", rule: "place-content: baseline;" },
            { name: "place-content-stretch", rule: "place-content: stretch;" },

            { name: "place-items-start", rule: "place-items: start;" },
            { name: "place-items-end", rule: "place-items: end;" },
            { name: "place-items-center", rule: "place-items: center;" },
            { name: "place-items-baseline", rule: "place-items: baseline;" },
            { name: "place-items-stretch", rule: "place-items: stretch;" },

            { name: "place-self-auto", rule: "place-self: auto;" },
            { name: "place-self-start", rule: "place-self: start;" },
            { name: "place-self-end", rule: "place-self: end;" },
            { name: "place-self-center", rule: "place-self: center;" },
            { name: "place-self-stretch", rule: "place-self: stretch;" },
        ].map(r => ({ ...r, category: 'flexbox-and-grid', section: 'place' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}