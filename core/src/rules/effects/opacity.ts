import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Opacity implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            ...this.config.opacity.map(([value, opacity]) => ({
                name: `opacity-${value}`,
                rule: `opacity: ${opacity};`
            })),
        ].map(r => ({ ...r, category: 'effects', section: 'opacity' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}