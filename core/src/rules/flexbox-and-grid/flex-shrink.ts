import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class FlexShrink implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "shrink",
                rule: "flex-shrink: 1;"
            },
            {
                name: "shrink-0",
                rule: "flex-shrink: 0;"
            }
        ].map(r => ({ ...r, category: 'flexbox-and-grid', section: 'flex-shrink' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}