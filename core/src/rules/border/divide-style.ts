import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class DivideStyle implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "divide-solid", rule: "> *:not(:first-child) { border-style: solid; }" },
            { name: "divide-dashed", rule: "> *:not(:first-child) { border-style: dashed; }" },
            { name: "divide-dotted", rule: "> *:not(:first-child) { border-style: dotted; }" },
            { name: "divide-double", rule: "> *:not(:first-child) { border-style: double; }" },
            { name: "divide-none", rule: "> *:not(:first-child) { border-style: none; }" },
        ].map(r => ({ ...r, category: 'border', section: 'divide-style' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}
