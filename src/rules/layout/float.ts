import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class Float implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "float-start", rule: "float: inline-start;" },
            { name: "float-end", rule: "float: inline-end;" },
            { name: "float-right", rule: "float: right;" },
            { name: "float-left", rule: "float: left;" },
            { name: "float-none", rule: "float: none;" },
        ];

        return {
            rules,
            output: renderRules(rules)
        }
    }
}