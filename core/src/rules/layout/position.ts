import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Position implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "static",
                rule: "position: static;"
            },
            {
                name: "fixed",
                rule: "position: fixed;"
            },
            {
                name: "absolute",
                rule: "position: absolute;"
            },
            {
                name: "relative",
                rule: "position: relative;"
            },
            {
                name: "sticky",
                rule: "position: sticky;"
            },
        ].map(r => ({ ...r, category: 'layout', section: 'position' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}

