import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class FlexDirection implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "flex-row",
                rule: "flex-direction: row;"
            },
            {
                name: "flex-row-reverse",
                rule: "flex-direction: row-reverse;"
            },
            {
                name: "flex-col",
                rule: "flex-direction: column;"
            },
            {
                name: "flex-col-reverse",
                rule: "flex-direction: column-reverse;"
            }
        ].map(r => ({ ...r, category: 'flexbox-and-grid', section: 'flex-direction' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}