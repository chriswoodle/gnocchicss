import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class Clear implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "clear-start", rule: "clear: inline-start;" },
            { name: "clear-end", rule: "clear: inline-end;" },
            { name: "clear-left", rule: "clear: left;" },
            { name: "clear-right", rule: "clear: right;" },
            { name: "clear-both", rule: "clear: both;" },
            { name: "clear-none", rule: "clear: none;" },
        ];

        return {
            output: renderRules(rules)
        }
    }
}