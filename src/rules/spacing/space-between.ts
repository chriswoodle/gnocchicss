import { Injectable } from "@nestjs/common";
import { BASE_REM, SIZES } from "../../constants.js";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { addNegativeRules, renderRules } from "../../utils.js";

@Injectable()
export class SpaceBetween implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "space-x-0", rule: "> *:not(:first-child) { margin-left: 0; }" },
            { name: "space-y-0", rule: "> *:not(:first-child) { margin-top: 0; }" },
            { name: "space-x-px", rule: "> *:not(:first-child) { margin-left: 1px; }" },
            { name: "space-y-px", rule: "> *:not(:first-child) { margin-top: 1px; }" },
            { name: "space-x-reverse", rule: "> *:not(:first-child) { --tw-space-x-reverse: 1; }" },
            { name: "space-y-reverse", rule: "> *:not(:first-child) { --tw-space-y-reverse: 1; }" },
            ...addNegativeRules([
                ...SIZES.map((size) => ({
                    name: `space-x-${size}`,
                    rule: `> *:not(:first-child) { margin-left: ${size * BASE_REM}rem; /* ${size * 4}px */ }`
                })),
                ...SIZES.map((size) => ({
                    name: `space-y-${size}`,
                    rule: `> *:not(:first-child) { margin-top: ${size * BASE_REM}rem; /* ${size * 4}px */ }`
                })),
            ])
        ];

        return {
            output: renderRules(rules)
        }
    }
}