import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class BorderStyle implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "border-solid", rule: "border-style: solid;" },
            { name: "border-dashed", rule: "border-style: dashed;" },
            { name: "border-dotted", rule: "border-style: dotted;" },
            { name: "border-double", rule: "border-style: double;" },
            { name: "border-hidden", rule: "border-style: hidden;" },
            { name: "border-none", rule: "border-style: none;" },
        ];

        return {
            output: renderRules(rules)
        }
    }
}