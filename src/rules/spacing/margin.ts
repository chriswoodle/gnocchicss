import { Injectable } from "@nestjs/common";
import { BASE_REM, SIZES } from "../../constants.js";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { addNegativeRules, renderRules } from "../../utils.js";

@Injectable()
export class Margin implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "m-auto", rule: "margin: auto;" },
            { name: "mx-auto", rule: "margin-left: auto; margin-right: auto;" },
            { name: "my-auto", rule: "margin-top: auto; margin-bottom: auto;" },
            { name: "mt-auto", rule: "margin-top: auto;" },
            { name: "mb-auto", rule: "margin-bottom: auto;" },
            { name: "ml-auto", rule: "margin-left: auto;" },
            { name: "mr-auto", rule: "margin-right: auto;" },
            { name: "ms-auto", rule: "margin-inline-start: auto;" },
            { name: "me-auto", rule: "margin-inline-end: auto;" },

            { name: "m-0", rule: "margin: 0;" },
            { name: "mx-0", rule: "margin-left: 0; margin-right: 0;" },
            { name: "my-0", rule: "margin-top: 0; margin-bottom: 0;" },
            { name: "mt-0", rule: "margin-top: 0;" },
            { name: "mb-0", rule: "margin-bottom: 0;" },
            { name: "ml-0", rule: "margin-left: 0;" },
            { name: "mr-0", rule: "margin-right: 0;" },
            { name: "ms-0", rule: "margin-inline-start: 0;" },
            { name: "me-0", rule: "margin-inline-end: 0;" },

            ...addNegativeRules([
                { name: "m-px", rule: "margin: 1px;" },
                ...SIZES.map((size) => ({
                    name: `m-${size}`,
                    rule: `margin: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),
                { name: "mx-px", rule: "margin-left: 1px; margin-right: 1px;" },
                ...SIZES.map((size) => ({
                    name: `mx-${size}`,
                    rule: `margin-left: ${size * BASE_REM}rem; margin-right: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),
                { name: "my-px", rule: "margin-top: 1px; margin-bottom: 1px;" },
                ...SIZES.map((size) => ({
                    name: `my-${size}`,
                    rule: `margin-top: ${size * BASE_REM}rem; margin-bottom: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),
                { name: "mt-px", rule: "margin-top: 1px;" },
                ...SIZES.map((size) => ({
                    name: `mt-${size}`,
                    rule: `margin-top: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),
                { name: "mb-px", rule: "margin-bottom: 1px;" },
                ...SIZES.map((size) => ({
                    name: `mb-${size}`,
                    rule: `margin-bottom: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),
                { name: "ml-px", rule: "margin-left: 1px;" },
                ...SIZES.map((size) => ({
                    name: `ml-${size}`,
                    rule: `margin-left: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),
                { name: "mr-px", rule: "margin-right: 1px;" },
                ...SIZES.map((size) => ({
                    name: `mr-${size}`,
                    rule: `margin-right: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),
                { name: "ms-px", rule: "margin-inline-start: 1px;" },
                ...SIZES.map((size) => ({
                    name: `ms-${size}`,
                    rule: `margin-inline-start: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),
                { name: "me-px", rule: "margin-inline-end: 1px;" },
                ...SIZES.map((size) => ({
                    name: `me-${size}`,
                    rule: `margin-inline-end: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),
            ]),
        ];

        return {
            rules,
            output: renderRules(rules)
        }
    }
}