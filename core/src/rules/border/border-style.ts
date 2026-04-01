import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";
export class BorderStyle implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "border-solid", rule: "border-style: solid;" },
            { name: "border-dashed", rule: "border-style: dashed;" },
            { name: "border-dotted", rule: "border-style: dotted;" },
            { name: "border-double", rule: "border-style: double;" },
            { name: "border-hidden", rule: "border-style: hidden;" },
            { name: "border-none", rule: "border-style: none;" },
        ].map(r => ({ ...r, category: 'border', section: 'border-style' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}