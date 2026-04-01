import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class FlexGrow implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "grow",
                rule: "flex-grow: 1;"
            },
            {
                name: "grow-0",
                rule: "flex-grow: 0;"
            }
        ].map(r => ({ ...r, category: 'flexbox-and-grid', section: 'flex-grow' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}