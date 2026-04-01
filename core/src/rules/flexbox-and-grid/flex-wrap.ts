import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class FlexWrap implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "flex-wrap",
                rule: "flex-wrap: wrap;"
            },
            {
                name: "flex-wrap-reverse",
                rule: "flex-wrap: wrap-reverse;"
            },
            {
                name: "flex-nowrap",
                rule: "flex-wrap: nowrap;"
            }
        ].map(r => ({ ...r, category: 'flexbox-and-grid', section: 'flex-wrap' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}