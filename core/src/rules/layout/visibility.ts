import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Visibility implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "visible",
                rule: "visibility: visible;"
            },
            {
                name: "invisible",
                rule: "visibility: hidden;"
            },
            {
                name: "collapse",
                rule: "visibility: collapse;"
            }
        ].map(r => ({ ...r, category: 'layout', section: 'visibility' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}