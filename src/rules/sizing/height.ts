import { Injectable } from "@nestjs/common";
import { BASE_REM, EXPANDED_FRACTIONS, SIZES } from "../../constants.js";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class Height implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "h-auto",
                rule: "height: auto;"
            },
            {
                name: "h-0",
                rule: "height: 0;"
            },
            {
                name: "h-px",
                rule: "height: 1px;"
            },
            {
                name: "h-screen",
                rule: "height: 100vh;"
            },
            {
                name: "h-svh",
                rule: "height: 100svh;"
            },
            {
                name: "h-lvh",
                rule: "height: 100lvh;"
            },
            {
                name: "h-dvh",
                rule: "height: 100dvh;"
            },
            {
                name: "h-min",
                rule: "height: min-content;"
            },
            {
                name: "h-max",
                rule: "height: max-content;"
            },
            {
                name: "h-fit",
                rule: "height: fit-content;"
            },
            ...EXPANDED_FRACTIONS.map(([name, value]) => ({
                name: `h-${name}`,
                rule: `height: ${value * 100}%;`
            })),
            ...SIZES.map((size) => ({
                name: `h-${size}`,
                rule: `height: ${size * BASE_REM}rem; /* ${size * 4}px */`
            })),

        ];

        return {
            output: renderRules(rules)
        }
    }
}