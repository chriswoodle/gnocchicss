import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class _Object implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "object-contain", rule: "object-fit: contain;" },
            { name: "object-cover", rule: "object-fit: cover;" },
            { name: "object-fill", rule: "object-fit: fill;" },
            { name: "object-none", rule: "object-fit: none;" },
            { name: "object-scale-down", rule: "object-fit: scale-down;" },
            { name: "object-bottom", rule: "object-position: bottom;" },
            { name: "object-center", rule: "object-position: center;" },
            { name: "object-left", rule: "object-position: left;" },
            { name: "object-left-bottom", rule: "object-position: left bottom;" },
            { name: "object-left-top", rule: "object-position: left top;" },
            { name: "object-right", rule: "object-position: right;" },
            { name: "object-right-bottom", rule: "object-position: right bottom;" },
            { name: "object-right-top", rule: "object-position: right top;" },
            { name: "object-top", rule: "object-position: top;" },
        ];

        return {
            rules,
            output: renderRules(rules)
        }
    }
}