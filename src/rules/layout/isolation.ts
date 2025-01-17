import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class Isolation implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "isolate", rule: "isolation: isolate;" },
            { name: "isolation-auto", rule: "isolation: auto;" },
        ];

        return {
            output: renderRules(rules)
        }
    }
}