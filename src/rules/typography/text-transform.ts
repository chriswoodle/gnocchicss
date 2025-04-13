import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class TextTransform implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "uppercase",
                rule: "text-transform: uppercase;"
            },
            {
                name: "lowercase",
                rule: "text-transform: lowercase;"
            },
            {
                name: "capitalize",
                rule: "text-transform: capitalize;"
            },
            {
                name: "normal-case",
                rule: "text-transform: none;"
            }
        ];

        return {
            rules,
            output: renderRules(rules)
        }
    }
} 