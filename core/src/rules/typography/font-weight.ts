import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class FontWeight implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "font-thin", rule: "font-weight: 100;" },
            { name: "font-extralight", rule: "font-weight: 200;" },
            { name: "font-light", rule: "font-weight: 300;" },
            { name: "font-normal", rule: "font-weight: 400;" },
            { name: "font-medium", rule: "font-weight: 500;" },
            { name: "font-semibold", rule: "font-weight: 600;" },
            { name: "font-bold", rule: "font-weight: 700;" },
            { name: "font-extrabold", rule: "font-weight: 800;" },
            { name: "font-black", rule: "font-weight: 900;" },
        ].map(r => ({ ...r, category: 'typography', section: 'font-weight' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}