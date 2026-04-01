import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Break implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "break-after-auto", rule: "break-after: auto;" },
            { name: "break-after-avoid", rule: "break-after: avoid;" },
            { name: "break-after-all", rule: "break-after: all;" },
            { name: "break-after-avoid-page", rule: "break-after: avoid-page;" },
            { name: "break-after-page", rule: "break-after: page;" },
            { name: "break-after-left", rule: "break-after: left;" },
            { name: "break-after-right", rule: "break-after: right;" },
            { name: "break-after-column", rule: "break-after: column;" },
            { name: "break-before-auto", rule: "break-before: auto;" },
            { name: "break-before-avoid", rule: "break-before: avoid;" },
            { name: "break-before-all", rule: "break-before: all;" },
            { name: "break-before-avoid-page", rule: "break-before: avoid-page;" },
            { name: "break-before-page", rule: "break-before: page;" },
            { name: "break-before-left", rule: "break-before: left;" },
            { name: "break-before-right", rule: "break-before: right;" },
            { name: "break-before-column", rule: "break-before: column;" },
            { name: "break-inside-auto", rule: "break-inside: auto;" },
            { name: "break-inside-avoid", rule: "break-inside: avoid;" },
            { name: "break-inside-avoid-page", rule: "break-inside: avoid-page;" },
            { name: "break-inside-avoid-column", rule: "break-inside: avoid-column;" },
        ].map(r => ({ ...r, category: 'layout', section: 'break' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}
