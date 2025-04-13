import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class FlexWrap implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "flex-wrap",
                rule: "flex-wrap: wrap;"
            },
            {
                name: "flex-wrap-reverse",
                rule: "flex-wrap: wrap-reverse;"
            },
            {
                name: "flex-nowrap",
                rule: "flex-wrap: nowrap;"
            }
        ];

        return {
            rules,
            output: renderRules(rules)
        }
    }
}