import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class Position implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "static",
                rule: "position: static;"
            },
            {
                name: "fixed",
                rule: "position: fixed;"
            },
            {
                name: "absolute",
                rule: "position: absolute;"
            },
            {
                name: "relative",
                rule: "position: relative;"
            },
            {
                name: "sticky",
                rule: "position: sticky;"
            },
        ];

        return {
            output: renderRules(rules)
        }
    }
}

