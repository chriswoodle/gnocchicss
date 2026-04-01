import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Flex implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "flex-1",
                rule: "flex: 1 1 0%;"
            },
            {
                name: "flex-auto",
                rule: "flex: 1 1 auto;"
            },
            {
                name: "flex-initial",
                rule: "flex: 0 1 auto;"
            },
            {
                name: "flex-none",
                rule: "flex: none;"
            }
        ].map(r => ({ ...r, category: 'flexbox-and-grid', section: 'flex' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}