import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class FlexShrink implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "shrink",
                rule: "flex-shrink: 1;"
            },
            {
                name: "shrink-0",
                rule: "flex-shrink: 0;"
            }
        ];

        return {
            output: renderRules(rules)
        }
    }
}