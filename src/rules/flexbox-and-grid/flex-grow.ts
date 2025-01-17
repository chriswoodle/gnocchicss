import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class FlexGrow implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "grow",
                rule: "flex-grow: 1;"
            },
            {
                name: "grow-0",
                rule: "flex-grow: 0;"
            }
        ];

        return {
            output: renderRules(rules)
        }
    }
}