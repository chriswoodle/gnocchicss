import { BASE_REM, BORDER_SIZES } from "../../constants.js";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class BorderRadius implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "rounded-none", rule: "border-radius: 0;" },
            ...BORDER_SIZES.map(([size, value]) => ({
                name: size ? ['rounded', size].join('-') : 'rounded',
                rule: `border-radius: ${value * BASE_REM}rem; /* ${value * 4}px */`
            })),
            { name: "rounded-full", rule: "border-radius: 9999px;" },

            ...[
                { name: "rounded-s-none", rule: "border-start-start-radius: 0px; border-end-start-radius: 0px;" },
                ...BORDER_SIZES.map(([size, value]) => ({
                    name: size ? ['rounded-s', size].join('-') : 'rounded-s',
                    rule: `border-start-start-radius: ${value * BASE_REM}rem; border-end-start-radius: ${value * BASE_REM}rem; /* ${value * 4}px */`
                })),
                { name: "rounded-s-full", rule: "border-start-start-radius: 9999px; border-end-start-radius: 9999px;" },
            ].map(r => ({ ...r, subsection: 'rounded-s', })),

            ...[
                { name: "rounded-e-none", rule: "border-start-end-radius: 0px; border-end-end-radius: 0px;" },
                ...BORDER_SIZES.map(([size, value]) => ({
                    name: size ? ['rounded-e', size].join('-') : 'rounded-e',
                    rule: `border-start-end-radius: ${value * BASE_REM}rem; border-end-end-radius: ${value * BASE_REM}rem; /* ${value * 4}px */`
                })),
                { name: "rounded-e-full", rule: "border-start-end-radius: 9999px; border-end-end-radius: 9999px;" },
            ].map(r => ({ ...r, subsection: 'rounded-e', })),

            ...[
                { name: "rounded-t-none", rule: "border-top-left-radius: 0px; border-top-right-radius: 0px;" },
                ...BORDER_SIZES.map(([size, value]) => ({
                    name: size ? ['rounded-t', size].join('-') : 'rounded-t',
                    rule: `border-top-left-radius: ${value * BASE_REM}rem; border-top-right-radius: ${value * BASE_REM}rem; /* ${value * 4}px */`
                })),
                { name: "rounded-t-full", rule: "border-top-left-radius: 9999px; border-top-right-radius: 9999px;" },
            ].map(r => ({ ...r, subsection: 'rounded-t', })),

            ...[
                { name: "rounded-r-none", rule: "border-top-right-radius: 0px; border-bottom-right-radius: 0px;" },
                ...BORDER_SIZES.map(([size, value]) => ({
                    name: size ? ['rounded-r', size].join('-') : 'rounded-r',
                    rule: `border-top-right-radius: ${value * BASE_REM}rem; border-bottom-right-radius: ${value * BASE_REM}rem; /* ${value * 4}px */`
                })),
                { name: "rounded-r-full", rule: "border-top-right-radius: 9999px; border-bottom-right-radius: 9999px;" },
            ].map(r => ({ ...r, subsection: 'rounded-r', })),

            ...[
                { name: "rounded-b-none", rule: "border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;" },
                ...BORDER_SIZES.map(([size, value]) => ({
                    name: size ? ['rounded-b', size].join('-') : 'rounded-b',
                    rule: `border-bottom-left-radius: ${value * BASE_REM}rem; border-bottom-right-radius: ${value * BASE_REM}rem; /* ${value * 4}px */`
                })),
                { name: "rounded-b-full", rule: "border-bottom-left-radius: 9999px; border-bottom-right-radius: 9999px;" },
            ].map(r => ({ ...r, subsection: 'rounded-b', })),

            ...[
                { name: "rounded-l-none", rule: "border-top-left-radius: 0px; border-bottom-left-radius: 0px;" },
                ...BORDER_SIZES.map(([size, value]) => ({
                    name: size ? ['rounded-l', size].join('-') : 'rounded-l',
                    rule: `border-top-left-radius: ${value * BASE_REM}rem; border-bottom-left-radius: ${value * BASE_REM}rem; /* ${value * 4}px */`
                })),
                { name: "rounded-l-full", rule: "border-top-left-radius: 9999px; border-bottom-left-radius: 9999px;" },
            ].map(r => ({ ...r, subsection: 'rounded-l', })),

            ...[
                { name: "rounded-ss-none", rule: "border-start-start-radius: 0px;" },
                ...BORDER_SIZES.map(([size, value]) => ({
                    name: size ? ['rounded-ss', size].join('-') : 'rounded-ss',
                    rule: `border-start-start-radius: ${value * BASE_REM}rem; /* ${value * 4}px */`
                })),
                { name: "rounded-ss-full", rule: "border-start-start-radius: 9999px;" },
            ].map(r => ({ ...r, subsection: 'rounded-ss', })),

            ...[
                { name: "rounded-se-none", rule: "border-start-end-radius: 0px;" },
                ...BORDER_SIZES.map(([size, value]) => ({
                    name: size ? ['rounded-se', size].join('-') : 'rounded-se',
                    rule: `border-start-end-radius: ${value * BASE_REM}rem; /* ${value * 4}px */`
                })),
                { name: "rounded-se-full", rule: "border-start-end-radius: 9999px;" },
            ].map(r => ({ ...r, subsection: 'rounded-se', })),

            ...[
                { name: "rounded-ee-none", rule: "border-end-end-radius: 0px;" },
                ...BORDER_SIZES.map(([size, value]) => ({
                    name: size ? ['rounded-ee', size].join('-') : 'rounded-ee',
                    rule: `border-end-end-radius: ${value * BASE_REM}rem; /* ${value * 4}px */`
                })),
                { name: "rounded-ee-full", rule: "border-end-end-radius: 9999px;" },
            ].map(r => ({ ...r, subsection: 'rounded-ee', })),

            ...[
                { name: "rounded-es-none", rule: "border-end-start-radius: 0px;" },
                ...BORDER_SIZES.map(([size, value]) => ({
                    name: size ? ['rounded-es', size].join('-') : 'rounded-es',
                    rule: `border-end-start-radius: ${value * BASE_REM}rem; /* ${value * 4}px */`
                })),
                { name: "rounded-es-full", rule: "border-end-start-radius: 9999px;" },
            ].map(r => ({ ...r, subsection: 'rounded-es', })),

            ...[
                { name: "rounded-tl-none", rule: "border-top-left-radius: 0px;" },
                ...BORDER_SIZES.map(([size, value]) => ({
                    name: size ? ['rounded-tl', size].join('-') : 'rounded-tl',
                    rule: `border-top-left-radius: ${value * BASE_REM}rem; /* ${value * 4}px */`
                })),
                { name: "rounded-tl-full", rule: "border-top-left-radius: 9999px;" },
            ].map(r => ({ ...r, subsection: 'rounded-tl', })),

            ...[
                { name: "rounded-tr-none", rule: "border-top-right-radius: 0px;" },
                ...BORDER_SIZES.map(([size, value]) => ({
                    name: size ? ['rounded-tr', size].join('-') : 'rounded-tr',
                    rule: `border-top-right-radius: ${value * BASE_REM}rem; /* ${value * 4}px */`
                })),
                { name: "rounded-tr-full", rule: "border-top-right-radius: 9999px;" },
            ].map(r => ({ ...r, subsection: 'rounded-tr', })),

            ...[
                { name: "rounded-br-none", rule: "border-bottom-right-radius: 0px;" },
                ...BORDER_SIZES.map(([size, value]) => ({
                    name: size ? ['rounded-br', size].join('-') : 'rounded-br',
                    rule: `border-bottom-right-radius: ${value * BASE_REM}rem; /* ${value * 4}px */`
                })),
                { name: "rounded-br-full", rule: "border-bottom-right-radius: 9999px;" },
            ].map(r => ({ ...r, subsection: 'rounded-br', })),

            ...[
                { name: "rounded-bl-none", rule: "border-bottom-left-radius: 0px;" },
                ...BORDER_SIZES.map(([size, value]) => ({
                    name: size ? ['rounded-bl', size].join('-') : 'rounded-bl',
                    rule: `border-bottom-left-radius: ${value * BASE_REM}rem; /* ${value * 4}px */`
                })),
                { name: "rounded-bl-full", rule: "border-bottom-left-radius: 9999px;" },
            ].map(r => ({ ...r, subsection: 'rounded-bl', })),

        ].map(r => ({ ...r, category: 'border', section: 'border-radius' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}