import { BASE_REM, SIZES } from "../../constants.js";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { addNegativeRules, renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Margin implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            ...[
                { name: "m-auto", rule: "margin: auto;" },
                { name: "m-0", rule: "margin: 0;" },
                ...addNegativeRules([
                    { name: "m-px", subsection: 'margin', rule: "margin: 1px;" },
                    ...SIZES.map((size) => ({
                        name: `m-${size}`,
                        subsection: 'margin',
                        rule: `margin: ${size * BASE_REM}rem; /* ${size * 4}px */`
                    })),
                ])
            ].map(r => ({ ...r, subsection: 'margin', })),

            ...[
                { name: "mx-auto", rule: "margin-left: auto; margin-right: auto;" },
                { name: "mx-0", rule: "margin-left: 0; margin-right: 0;" },
                ...addNegativeRules([
                    { name: "mx-px", subsection: 'margin-x', rule: "margin-left: 1px; margin-right: 1px;" },
                    ...SIZES.map((size) => ({
                        name: `mx-${size}`,
                        subsection: 'margin-x',
                        rule: `margin-left: ${size * BASE_REM}rem; margin-right: ${size * BASE_REM}rem; /* ${size * 4}px */`
                    })),
                ])
            ].map(r => ({ ...r, subsection: 'mx', })),

            ...[
                { name: "my-auto", rule: "margin-top: auto; margin-bottom: auto;" },
                { name: "my-0", rule: "margin-top: 0; margin-bottom: 0;" },
                ...addNegativeRules([
                    { name: "my-px", rule: "margin-top: 1px; margin-bottom: 1px;" },
                    ...SIZES.map((size) => ({
                        name: `my-${size}`,
                        rule: `margin-top: ${size * BASE_REM}rem; margin-bottom: ${size * BASE_REM}rem; /* ${size * 4}px */`
                    })),
                ])
            ].map(r => ({ ...r, subsection: 'my', })),

            ...[
                { name: "mt-auto", rule: "margin-top: auto;" },
                { name: "mt-0", rule: "margin-top: 0;" },
                ...addNegativeRules([
                    { name: "mt-px", rule: "margin-top: 1px;" },
                    ...SIZES.map((size) => ({
                        name: `mt-${size}`,
                        rule: `margin-top: ${size * BASE_REM}rem; /* ${size * 4}px */`
                    })),
                ])
            ].map(r => ({ ...r, subsection: 'mt', })),

            ...[
                { name: "mb-auto", rule: "margin-bottom: auto;" },
                { name: "mb-0", rule: "margin-bottom: 0;" },
                ...addNegativeRules([
                    { name: "mb-px", rule: "margin-bottom: 1px;" },
                    ...SIZES.map((size) => ({
                        name: `mb-${size}`,
                        rule: `margin-bottom: ${size * BASE_REM}rem; /* ${size * 4}px */`
                    })),
                ])
            ].map(r => ({ ...r, subsection: 'mb', })),

            ...[
                { name: "ml-auto", rule: "margin-left: auto;" },
                { name: "ml-0", rule: "margin-left: 0;" },
                ...addNegativeRules([
                    { name: "ml-px", rule: "margin-left: 1px;" },
                    ...SIZES.map((size) => ({
                        name: `ml-${size}`,
                        rule: `margin-left: ${size * BASE_REM}rem; /* ${size * 4}px */`
                    })),
                ])
            ].map(r => ({ ...r, subsection: 'ml', })),

            ...[
                { name: "mr-auto", rule: "margin-right: auto;" },
                { name: "mr-0", rule: "margin-right: 0;" },
                ...addNegativeRules([
                    { name: "mr-px", rule: "margin-right: 1px;" },
                    ...SIZES.map((size) => ({
                        name: `mr-${size}`,
                        rule: `margin-right: ${size * BASE_REM}rem; /* ${size * 4}px */`
                    })),
                ])
            ].map(r => ({ ...r, subsection: 'mr', })),

            ...[
                { name: "ms-auto", rule: "margin-inline-start: auto;" },
                { name: "ms-0", rule: "margin-inline-start: 0;" },
                ...addNegativeRules([
                    { name: "ms-px", rule: "margin-inline-start: 1px;" },
                    ...SIZES.map((size) => ({
                        name: `ms-${size}`,
                        rule: `margin-inline-start: ${size * BASE_REM}rem; /* ${size * 4}px */`
                    })),
                ])
            ].map(r => ({ ...r, subsection: 'ms', })),

            ...[
                { name: "me-auto", rule: "margin-inline-end: auto;" },
                { name: "me-0", rule: "margin-inline-end: 0;" },
                ...addNegativeRules([
                    { name: "me-px", rule: "margin-inline-end: 1px;" },
                    ...SIZES.map((size) => ({
                        name: `me-${size}`,
                        rule: `margin-inline-end: ${size * BASE_REM}rem; /* ${size * 4}px */`
                    })),
                ])
            ].map(r => ({ ...r, subsection: 'me', })),
        ].map(r => ({ ...r, category: 'spacing', section: 'margin' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}