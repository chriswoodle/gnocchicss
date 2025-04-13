import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { addNegativeRules, renderRules } from "../../utils.js";

@Injectable()
export class ZIndex implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            ...addNegativeRules([
                { name: "z-0", rule: "z-index: 0;" },
                { name: "z-10", rule: "z-index: 10;" },
                { name: "z-20", rule: "z-index: 20;" },
                { name: "z-30", rule: "z-index: 30;" },
                { name: "z-40", rule: "z-index: 40;" },
                { name: "z-50", rule: "z-index: 50;" },
            ]),
            { name: "z-auto", rule: "z-index: auto;" },
        ];

        return {
            rules,
            output: renderRules(rules)
        }
    }
}