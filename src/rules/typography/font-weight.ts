import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class FontWeight implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "font-thin", rule: "font-weight: 100;" },
            { name: "font-extralight", rule: "font-weight: 200;" },
            { name: "font-light", rule: "font-weight: 300;" },
            { name: "font-normal", rule: "font-weight: 400;" },
            { name: "font-medium", rule: "font-weight: 500;" },
            { name: "font-semibold", rule: "font-weight: 600;" },
            { name: "font-bold", rule: "font-weight: 700;" },
            { name: "font-extrabold", rule: "font-weight: 800;" },
            { name: "font-black", rule: "font-weight: 900;" },
        ];

        return {
            rules,
            output: renderRules(rules)
        }
    }
}