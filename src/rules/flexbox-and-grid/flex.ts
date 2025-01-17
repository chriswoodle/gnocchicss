import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class Flex implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "flex-1",
                rule: "flex: 1 1 0%;"
            },
            {
                name: "flex-auto",
                rule: "flex: 1 1 auto;"
            },
            {
                name: "flex-initial",
                rule: "flex: 0 1 auto;"
            },
            {
                name: "flex-none",
                rule: "flex: none;"
            }
        ];

        return {
            output: renderRules(rules)
        }
    }
}