import { GeneratedPartial, Rule } from "../../types.js";
import { addNegativeRules, renderRules } from "../../utils.js";

export function generate(): GeneratedPartial {
    const rules: Rule[] = addNegativeRules([
        { name: "rotate-0", rule: "transform: rotate(0deg);" },
        { name: "rotate-1", rule: "transform: rotate(1deg);" },
        { name: "rotate-2", rule: "transform: rotate(2deg);" },
        { name: "rotate-3", rule: "transform: rotate(3deg);" },
        { name: "rotate-6", rule: "transform: rotate(6deg);" },
        { name: "rotate-12", rule: "transform: rotate(12deg);" },
        { name: "rotate-45", rule: "transform: rotate(45deg);" },
        { name: "rotate-90", rule: "transform: rotate(90deg);" },
        { name: "rotate-180", rule: "transform: rotate(180deg);" },
    ]);

    return {
        rules,
        output: renderRules(rules)
    }
}
