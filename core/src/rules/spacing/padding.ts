import { BASE_REM, SIZES } from "../../constants.js";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Padding implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            ...[
                { name: "p-0", rule: "padding: 0;" },
                { name: "p-px", rule: "padding: 1px;" },
                ...SIZES.map((size) => ({
                    name: `p-${size}`,
                    rule: `padding: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),
            ].map(r => ({ ...r, subsection: 'padding', })),

            ...[
                { name: "px-0", rule: "padding-left: 0; padding-right: 0;" },
                { name: "px-px", rule: "padding-left: 1px; padding-right: 1px;" },
                ...SIZES.map((size) => ({
                    name: `px-${size}`,
                    rule: `padding-left: ${size * BASE_REM}rem; padding-right: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),
            ].map(r => ({ ...r, subsection: 'padding-x', })),

            ...[
                { name: "py-0", rule: "padding-top: 0; padding-bottom: 0;" },
                { name: "py-px", rule: "padding-top: 1px; padding-bottom: 1px;" },
                ...SIZES.map((size) => ({
                    name: `py-${size}`,
                    rule: `padding-top: ${size * BASE_REM}rem; padding-bottom: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),
            ].map(r => ({ ...r, subsection: 'padding-y', })),

            ...[
                { name: "pt-0", rule: "padding-top: 0;" },
                { name: "pt-px", rule: "padding-top: 1px;" },
                ...SIZES.map((size) => ({
                    name: `pt-${size}`,
                    rule: `padding-top: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),
            ].map(r => ({ ...r, subsection: 'padding-top', })),

            ...[
                { name: "pb-0", rule: "padding-bottom: 0;" },
                { name: "pb-px", rule: "padding-bottom: 1px;" },
                ...SIZES.map((size) => ({
                    name: `pb-${size}`,
                    rule: `padding-bottom: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),
            ].map(r => ({ ...r, subsection: 'padding-bottom', })),

            ...[
                { name: "pl-0", rule: "padding-left: 0;" },
                { name: "pl-px", rule: "padding-left: 1px;" },
                ...SIZES.map((size) => ({
                    name: `pl-${size}`,
                    rule: `padding-left: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),
            ].map(r => ({ ...r, subsection: 'padding-left', })),

            ...[
                { name: "pr-0", rule: "padding-right: 0;" },
                { name: "pr-px", rule: "padding-right: 1px;" },
                ...SIZES.map((size) => ({
                    name: `pr-${size}`,
                    rule: `padding-right: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),
            ].map(r => ({ ...r, subsection: 'padding-right', })),

            ...[
                { name: "ps-0", rule: "padding-inline-start: 0;" },
                { name: "ps-px", rule: "padding-inline-start: 1px;" },
                ...SIZES.map((size) => ({
                    name: `ps-${size}`,
                    rule: `padding-inline-start: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),
            ].map(r => ({ ...r, subsection: 'padding-inline-start', })),

            ...[
                { name: "pe-0", rule: "padding-inline-end: 0;" },
                { name: "pe-px", rule: "padding-inline-end: 1px;" },
                ...SIZES.map((size) => ({
                    name: `pe-${size}`,
                    rule: `padding-inline-end: ${size * BASE_REM}rem; /* ${size * 4}px */`
                })),
            ].map(r => ({ ...r, subsection: 'padding-inline-end', })),
        ].map(r => ({ ...r, category: 'spacing', section: 'padding' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}