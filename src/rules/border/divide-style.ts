import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class DivideStyle implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "divide-solid", rule: "> *:not(:first-child) { border-style: solid; }" },
            { name: "divide-dashed", rule: "> *:not(:first-child) { border-style: dashed; }" },
            { name: "divide-dotted", rule: "> *:not(:first-child) { border-style: dotted; }" },
            { name: "divide-double", rule: "> *:not(:first-child) { border-style: double; }" },
            { name: "divide-none", rule: "> *:not(:first-child) { border-style: none; }" },
        ];

        return {
            output: renderRules(rules)
        }
    }
}
