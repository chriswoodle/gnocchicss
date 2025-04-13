import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class BoxSizing implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "box-border", rule: "box-sizing: border-box;" },
            { name: "box-content", rule: "box-sizing: content-box;" },
        ];

        return {
            rules,
            output: renderRules(rules)
        }
    }
}