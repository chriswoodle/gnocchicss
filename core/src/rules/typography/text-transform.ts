import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class TextTransform implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "uppercase",
                rule: "text-transform: uppercase;"
            },
            {
                name: "lowercase",
                rule: "text-transform: lowercase;"
            },
            {
                name: "capitalize",
                rule: "text-transform: capitalize;"
            },
            {
                name: "normal-case",
                rule: "text-transform: none;"
            }
        ].map(r => ({ ...r, category: 'typography', section: 'text-transform' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
} 