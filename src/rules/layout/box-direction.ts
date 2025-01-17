import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class BoxDirection implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "box-decoration-clone", rule: "box-decoration-break: clone;" },
            { name: "box-decoration-slice", rule: "box-decoration-break: slice;" },
        ];

        return {
            output: renderRules(rules)
        }
    }
}