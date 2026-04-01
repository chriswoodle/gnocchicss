import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class BoxSizing implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "box-border", rule: "box-sizing: border-box;" },
            { name: "box-content", rule: "box-sizing: content-box;" },
        ].map(r => ({ ...r, category: 'layout', section: 'box-sizing' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}