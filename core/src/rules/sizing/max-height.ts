import { BASE_REM, SIZES } from "../../constants.js";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class MaxHeight implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "max-h-0",
                rule: "max-height: 0;"
            },
            {
                name: "max-h-px",
                rule: "max-height: 1px;"
            },
            {
                name: "max-h-full",
                rule: "max-height: 100%;"
            },
            {
                name: "max-h-screen",
                rule: "max-height: 100vh;"
            },
            {
                name: "max-h-svh",
                rule: "max-height: 100svh;"
            },
            {
                name: "max-h-lvh",
                rule: "max-height: 100lvh;"
            },
            {
                name: "max-h-dvh",
                rule: "max-height: 100dvh;"
            },
            {
                name: "max-h-min",
                rule: "max-height: min-content;"
            },
            {
                name: "max-h-max",
                rule: "max-height: max-content;"
            },
            {
                name: "max-h-fit",
                rule: "max-height: fit-content;"
            },
            ...SIZES.map((size) => ({
                name: `max-h-${size}`,
                rule: `max-height: ${size * BASE_REM}rem; /* ${size * 4}px */`
            })),
        ].map(r => ({ ...r, category: 'sizing', section: 'max-height' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}