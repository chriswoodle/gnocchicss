import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class Visibility implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "visible",
                rule: "visibility: visible;"
            },
            {
                name: "invisible",
                rule: "visibility: hidden;"
            },
            {
                name: "collapse",
                rule: "visibility: collapse;"
            }
        ];

        return {
            output: renderRules(rules)
        }
    }
}