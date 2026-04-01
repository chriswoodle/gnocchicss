import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class AspectRatio implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "aspect-auto",
                rule: "aspect-ratio: auto;"
            },
            {
                name: "aspect-square",
                rule: "aspect-ratio: 1 / 1;"
            },
            {
                name: "aspect-video",
                rule: "aspect-ratio: 16 / 9;"
            },
        ].map(r => ({ ...r, category: 'layout', section: 'aspect-ratio' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}