import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class BoxDirection implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "box-decoration-clone", rule: "box-decoration-break: clone;" },
            { name: "box-decoration-slice", rule: "box-decoration-break: slice;" },
        ].map(r => ({ ...r, category: 'layout', section: 'box-direction' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}