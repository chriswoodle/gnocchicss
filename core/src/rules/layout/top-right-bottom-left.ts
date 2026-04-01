import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules, addNegativeRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";
import { BASE_REM, FRACTIONS, SIZES } from "../../constants.js";

type Fraction = readonly [string, number];

export class TopRightBottomLeft implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            ...[
                { name: "inset-auto", rule: "inset: auto;" },
                { name: "inset-0", rule: "inset: 0;" },
                ...addNegativeRules([
                    {
                        name: "inset-px",
                        rule: "inset: 1px;"
                    },
                    ...FRACTIONS.map((fraction: Fraction) => ({
                        name: `inset-${fraction[0]}`,
                        rule: `inset: ${fraction[1] * 100}%;`
                    })),
                    ...SIZES.map((size: number) => ({
                        name: `inset-${size}`,
                        rule: `inset: ${size * BASE_REM}rem; /* ${size * 4}px */`
                    })),
                ]),
            ].map(r => ({ ...r, subsection: 'inset', })),

            ...[
                { name: "inset-x-auto", rule: "left: auto; right: auto;" },
                { name: "inset-x-0", rule: "left: 0; right: 0;" },
                ...addNegativeRules([
                    {
                        name: "inset-x-px",
                        rule: "left: 1px; right: 1px;"
                    },
                    ...FRACTIONS.map((fraction: Fraction) => ({
                        name: `inset-x-${fraction[0]}`,
                        rule: `left: ${fraction[1] * 100}%; right: ${fraction[1] * 100}%;`
                    })),
                    ...SIZES.map((size: number) => ({
                        name: `inset-x-${size}`,
                        rule: `left: ${size * BASE_REM}rem; right: ${size * BASE_REM}rem; /* ${size * 4}px */`
                    })),
                ]),
            ].map(r => ({ ...r, subsection: 'inset-x', })),


            ...[
                { name: "inset-y-auto", rule: "top: auto; bottom: auto;" },
                { name: "inset-y-0", rule: "top: 0; bottom: 0;" },
                ...addNegativeRules([
                    {
                        name: "inset-y-px",
                        rule: "top: 1px; bottom: 1px;"
                    },
                    ...FRACTIONS.map((fraction: Fraction) => ({
                        name: `inset-y-${fraction[0]}`,
                        rule: `top: ${fraction[1] * 100}%; bottom: ${fraction[1] * 100}%;`
                    })),
                    ...SIZES.map((size: number) => ({
                        name: `inset-y-${size}`,
                        rule: `top: ${size * BASE_REM}rem; bottom: ${size * BASE_REM}rem; /* ${size * 4}px */`
                    })),
                ]),
            ].map(r => ({ ...r, subsection: 'inset-y', })),

            ...[
                { name: "start-auto", rule: "inset-inline-start: auto;" },
                { name: "start-0", rule: "inset-inline-start: 0;" },
                ...addNegativeRules([
                    {
                        name: "start-px",
                        rule: "inset-inline-start: 1px;"
                    },
                    ...FRACTIONS.map((fraction: Fraction) => ({
                        name: `start-${fraction[0]}`,
                        rule: `inset-inline-start: ${fraction[1] * 100}%;`
                    })),
                    ...SIZES.map((size: number) => ({
                        name: `start-${size}`,
                        rule: `inset-inline-start: ${size * BASE_REM}rem; /* ${size * 4}px */`
                    })),
                ]),
            ].map(r => ({ ...r, subsection: 'start', })),

            ...[
                { name: "end-auto", rule: "inset-inline-end: auto;" },
                { name: "end-0", rule: "inset-inline-end: 0;" },

                ...addNegativeRules([
                    {
                        name: "end-px",
                        rule: "inset-inline-end: 1px;"
                    },
                    ...FRACTIONS.map((fraction: Fraction) => ({
                        name: `end-${fraction[0]}`,
                        rule: `inset-inline-end: ${fraction[1] * 100}%;`
                    })),
                    ...SIZES.map((size: number) => ({
                        name: `end-${size}`,
                        rule: `inset-inline-end: ${size * BASE_REM}rem; /* ${size * 4}px */`
                    })),
                ]),
            ].map(r => ({ ...r, subsection: 'end', })),

            ...[
                { name: "top-auto", rule: "top: auto;" },
                { name: "top-0", rule: "top: 0;" },
                ...addNegativeRules([
                    {
                        name: "top-px",
                        rule: "top: 1px;"
                    },
                    ...FRACTIONS.map((fraction: Fraction) => ({
                        name: `top-${fraction[0]}`,
                        rule: `top: ${fraction[1] * 100}%;`
                    })),
                    ...SIZES.map((size: number) => ({
                        name: `top-${size}`,
                        rule: `top: ${size * BASE_REM}rem; /* ${size * 4}px */`
                    })),
                ]),
            ].map(r => ({ ...r, subsection: 'top', })),

            ...[
                { name: "right-auto", rule: "right: auto;" },
                { name: "right-0", rule: "right: 0;" },
                ...addNegativeRules([
                    {
                        name: "right-px",
                        rule: "right: 1px;"
                    },
                    ...FRACTIONS.map((fraction: Fraction) => ({
                        name: `right-${fraction[0]}`,
                        rule: `right: ${fraction[1] * 100}%;`
                    })),
                    ...SIZES.map((size: number) => ({
                        name: `right-${size}`,
                        rule: `right: ${size * BASE_REM}rem; /* ${size * 4}px */`
                    })),
                ]),
            ].map(r => ({ ...r, subsection: 'right', })),

            ...[
                { name: "bottom-auto", rule: "bottom: auto;" },
                { name: "bottom-0", rule: "bottom: 0;" },
                ...addNegativeRules([
                    {
                        name: "bottom-px",
                        rule: "bottom: 1px;"
                    },
                    ...FRACTIONS.map((fraction: Fraction) => ({
                        name: `bottom-${fraction[0]}`,
                        rule: `bottom: ${fraction[1] * 100}%;`
                    })),
                    ...SIZES.map((size: number) => ({
                        name: `bottom-${size}`,
                        rule: `bottom: ${size * BASE_REM}rem; /* ${size * 4}px */`
                    })),
                ]),
            ].map(r => ({ ...r, subsection: 'bottom', })),

            ...[
                { name: "left-auto", rule: "left: auto;" },
                { name: "left-0", rule: "left: 0;" },
                ...addNegativeRules([
                    {
                        name: "left-px",
                        rule: "left: 1px;"
                    },
                    ...FRACTIONS.map((fraction: Fraction) => ({
                        name: `left-${fraction[0]}`,
                        rule: `left: ${fraction[1] * 100}%;`
                    })),
                    ...SIZES.map((size: number) => ({
                        name: `left-${size}`,
                        rule: `left: ${size * BASE_REM}rem; /* ${size * 4}px */`
                    })),
                ]),
            ].map(r => ({ ...r, subsection: 'left', })),
        ].map(r => ({ ...r, category: 'layout', section: 'top-right-bottom-left' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}