import { GeneratedPartial, Rule } from "../../types.js";
import { addNegativeRules, renderRules } from "../../utils.js";

export function generate(): GeneratedPartial {
    const rules: Rule[] = addNegativeRules([
        { name: "scale-0", rule: "transform: scale(0);" },
        { name: "scale-x-0", rule: "transform: scaleX(0);" },
        { name: "scale-y-0", rule: "transform: scaleY(0);" },
        { name: "scale-50", rule: "transform: scale(.5);" },
        { name: "scale-x-50", rule: "transform: scaleX(.5);" },
        { name: "scale-y-50", rule: "transform: scaleY(.5);" },
        { name: "scale-75", rule: "transform: scale(.75);" },
        { name: "scale-x-75", rule: "transform: scaleX(.75);" },
        { name: "scale-y-75", rule: "transform: scaleY(.75);" },
        { name: "scale-90", rule: "transform: scale(.9);" },
        { name: "scale-x-90", rule: "transform: scaleX(.9);" },
        { name: "scale-y-90", rule: "transform: scaleY(.9);" },
        { name: "scale-95", rule: "transform: scale(.95);" },
        { name: "scale-x-95", rule: "transform: scaleX(.95);" },
        { name: "scale-y-95", rule: "transform: scaleY(.95);" },
        { name: "scale-100", rule: "transform: scale(1);" },
        { name: "scale-x-100", rule: "transform: scaleX(1);" },
        { name: "scale-y-100", rule: "transform: scaleY(1);" },
        { name: "scale-105", rule: "transform: scale(1.05);" },
        { name: "scale-x-105", rule: "transform: scaleX(1.05);" },
        { name: "scale-y-105", rule: "transform: scaleY(1.05);" },
        { name: "scale-110", rule: "transform: scale(1.1);" },
        { name: "scale-x-110", rule: "transform: scaleX(1.1);" },
        { name: "scale-y-110", rule: "transform: scaleY(1.1);" },
        { name: "scale-125", rule: "transform: scale(1.25);" },
        { name: "scale-x-125", rule: "transform: scaleX(1.25);" },
        { name: "scale-y-125", rule: "transform: scaleY(1.25);" },
        { name: "scale-150", rule: "transform: scale(1.5);" },
        { name: "scale-x-150", rule: "transform: scaleX(1.5);" },
        { name: "scale-y-150", rule: "transform: scaleY(1.5);" },
    ]);

    return {
        rules,
        output: renderRules(rules)
    }
}
