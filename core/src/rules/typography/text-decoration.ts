import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class TextDecoration implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "underline",
                rule: "text-decoration: underline;"
            },
            {
                name: "overline",
                rule: "text-decoration: overline;"
            },
            {
                name: "line-through",
                rule: "text-decoration: line-through;"
            },
            {
                name: "no-underline",
                rule: "text-decoration: none;"
            }
        ].map(r => ({ ...r, category: 'typography', section: 'text-decoration' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
} 