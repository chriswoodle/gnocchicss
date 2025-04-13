import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class FlexDirection implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "flex-row",
                rule: "flex-direction: row;"
            },
            {
                name: "flex-row-reverse",
                rule: "flex-direction: row-reverse;"
            },
            {
                name: "flex-col",
                rule: "flex-direction: column;"
            },
            {
                name: "flex-col-reverse",
                rule: "flex-direction: column-reverse;"
            }
        ];

        return {
            rules,
            output: renderRules(rules)
        }
    }
}