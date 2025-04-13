import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class Transform implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "transform-none", rule: "transform: none;" },
        ];

        return {
            rules,
            output: renderRules(rules)
        }
    }
}