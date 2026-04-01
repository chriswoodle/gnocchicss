import { BASE_REM, EXPANDED_FRACTIONS, SIZES } from "../../constants.js";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Width implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "w-auto",
                rule: "width: auto;"
            },
            {
                name: "w-0",
                rule: "width: 0;"
            },
            {
                name: "w-px",
                rule: "width: 1px;"
            },
            {
                name: "w-screen",
                rule: "width: 100vw;"
            },
            {
                name: "w-svw",
                rule: "width: 100svw;"
            },
            {
                name: "w-lvw",
                rule: "width: 100lvw;"
            },
            {
                name: "w-dvw",
                rule: "width: 100dvw;"
            },
            {
                name: "w-min",
                rule: "width: min-content;"
            },
            {
                name: "w-max",
                rule: "width: max-content;"
            },
            {
                name: "w-fit",
                rule: "width: fit-content;"
            },
            ...EXPANDED_FRACTIONS.map(([name, value]) => ({
                name: `w-${name}`,
                rule: `width: ${value * 100}%;`
            })),
            ...SIZES.map((size) => ({
                name: `w-${size}`,
                rule: `width: ${size * BASE_REM}rem; /* ${size * 4}px */`
            })),

        ].map(r => ({ ...r, category: 'sizing', section: 'width' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}