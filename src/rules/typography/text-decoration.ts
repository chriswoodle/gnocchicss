import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class TextDecoration implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "underline",
                rule: "text-decoration: underline;"
            },
            {
                name: "overline",
                rule: "text-decoration: overline;"
            },
            {
                name: "line-through",
                rule: "text-decoration: line-through;"
            },
            {
                name: "no-underline",
                rule: "text-decoration: none;"
            }
        ];

        return {
            output: renderRules(rules)
        }
    }
} 