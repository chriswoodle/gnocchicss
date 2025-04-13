import { Injectable } from "@nestjs/common";
import { BASE_REM, FRACTIONS, SIZES } from "../../constants.js";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { addNegativeRules, renderRules } from "../../utils.js";

@Injectable()
export class TopRightBottomLeft implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "inset-auto", rule: "inset: auto;" },
            { name: "inset-0", rule: "inset: 0;" },
            { name: "inset-x-auto", rule: "left: auto; right: auto;" },
            { name: "inset-x-0", rule: "left: 0; right: 0;" },
            { name: "inset-y-auto", rule: "top: auto; bottom: auto;" },
            { name: "inset-y-0", rule: "top: 0; bottom: 0;" },
            { name: "start-auto", rule: "inset-inline-start: auto;" },
            { name: "start-0", rule: "inset-inline-start: 0;" },
            { name: "end-auto", rule: "inset-inline-end: auto;" },
            { name: "end-0", rule: "inset-inline-end: 0;" },
            { name: "top-auto", rule: "top: auto;" },
            { name: "top-0", rule: "top: 0;" },
            { name: "right-auto", rule: "right: auto;" },
            { name: "right-0", rule: "right: 0;" },
            { name: "bottom-auto", rule: "bottom: auto;" },
            { name: "bottom-0", rule: "bottom: 0;" },
            { name: "left-auto", rule: "left: auto;" },
            { name: "left-0", rule: "left: 0;" },
            ...addNegativeRules([
                {
                    name: "inset-px",
                    rule: "inset: 1px;"
                },
                ...FRACTIONS.map((fraction) => ({
                    name: `inset-${fraction[0]}`,
                    rule: `inset: ${fraction[1] * 100}%;`
                })),
                ...SIZES.map((size) => ({
                    name: `inset-${size}`,
                    rule: `inset: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),

                {
                    name: "inset-x-px",
                    rule: "left: 1px; right: 1px;"
                },
                ...FRACTIONS.map((fraction) => ({
                    name: `inset-x-${fraction[0]}`,
                    rule: `left: ${fraction[1] * 100}%; right: ${fraction[1] * 100}%;`
                })),
                ...SIZES.map((size) => ({
                    name: `inset-x-${size}`,
                    rule: `left: ${size * BASE_REM}rem; right: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),

                {
                    name: "inset-y-px",
                    rule: "top: 1px; bottom: 1px;"
                },
                ...FRACTIONS.map((fraction) => ({
                    name: `inset-y-${fraction[0]}`,
                    rule: `top: ${fraction[1] * 100}%; bottom: ${fraction[1] * 100}%;`
                })),
                ...SIZES.map((size) => ({
                    name: `inset-y-${size}`,
                    rule: `top: ${size * BASE_REM}rem; bottom: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),

                {
                    name: "start-px",
                    rule: "inset-inline-start: 1px;"
                },
                ...FRACTIONS.map((fraction) => ({
                    name: `start-${fraction[0]}`,
                    rule: `inset-inline-start: ${fraction[1] * 100}%;`
                })),
                ...SIZES.map((size) => ({
                    name: `start-${size}`,
                    rule: `inset-inline-start: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),

                {
                    name: "end-px",
                    rule: "inset-inline-end: 1px;"
                },
                ...FRACTIONS.map((fraction) => ({
                    name: `end-${fraction[0]}`,
                    rule: `inset-inline-end: ${fraction[1] * 100}%;`
                })),
                ...SIZES.map((size) => ({
                    name: `end-${size}`,
                    rule: `inset-inline-end: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),

                {
                    name: "top-px",
                    rule: "top: 1px;"
                },
                ...FRACTIONS.map((fraction) => ({
                    name: `top-${fraction[0]}`,
                    rule: `top: ${fraction[1] * 100}%;`
                })),
                ...SIZES.map((size) => ({
                    name: `top-${size}`,
                    rule: `top: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),

                {
                    name: "right-px",
                    rule: "right: 1px;"
                },
                ...FRACTIONS.map((fraction) => ({
                    name: `right-${fraction[0]}`,
                    rule: `right: ${fraction[1] * 100}%;`
                })),
                ...SIZES.map((size) => ({
                    name: `right-${size}`,
                    rule: `right: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),

                {
                    name: "bottom-px",
                    rule: "bottom: 1px;"
                },
                ...FRACTIONS.map((fraction) => ({
                    name: `bottom-${fraction[0]}`,
                    rule: `bottom: ${fraction[1] * 100}%;`
                })),
                ...SIZES.map((size) => ({
                    name: `bottom-${size}`,
                    rule: `bottom: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),

                {
                    name: "left-px",
                    rule: "left: 1px;"
                },
                ...FRACTIONS.map((fraction) => ({
                    name: `left-${fraction[0]}`,
                    rule: `left: ${fraction[1] * 100}%;`
                })),
                ...SIZES.map((size) => ({
                    name: `left-${size}`,
                    rule: `left: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),
            ]),
        ];

        return {
            rules,
            output: renderRules(rules)
        }
    }
}