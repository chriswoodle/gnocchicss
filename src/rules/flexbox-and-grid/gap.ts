import { Injectable } from "@nestjs/common";
import { BASE_REM, SIZES } from "../../constants.js";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class Gap implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "gap-0", rule: "gap: 0;" },
            { name: "gap-px", rule: "gap: 1px;" },
            ...SIZES.map((size) => ({
                name: `gap-${size}`,
                rule: `gap: ${size * BASE_REM}rem; /* ${size * 4}px */`
            })),
            { name: "gap-x-0", rule: "column-gap: 0;" },
            { name: "gap-x-px", rule: "column-gap: 1px;" },
            ...SIZES.map((size) => ({
                name: `gap-x-${size}`,
                rule: `column-gap: ${size * BASE_REM}rem; /* ${size * 4}px */`
            })),
            { name: "gap-y-0", rule: "row-gap: 0;" },
            { name: "gap-y-px", rule: "row-gap: 1px;" },
            ...SIZES.map((size) => ({
                name: `gap-y-${size}`,
                rule: `row-gap: ${size * BASE_REM}rem; /* ${size * 4}px */`
            })),
        ];

        return {
            rules,
            output: renderRules(rules)
        }
    }
}