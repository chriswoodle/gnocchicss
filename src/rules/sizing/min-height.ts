import { Injectable } from "@nestjs/common";
import { BASE_REM, SIZES } from "../../constants.js";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class MinHeight implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "min-h-0",
                rule: "min-height: 0;"
            },
            {
                name: "min-h-px",
                rule: "min-height: 1px;"
            },
            {
                name: "min-h-full",
                rule: "min-height: 100%;"
            },
            {
                name: "min-h-screen",
                rule: "min-height: 100vh;"
            },
            {
                name: "min-h-svh",
                rule: "min-height: 100svh;"
            },
            {
                name: "min-h-lvh",
                rule: "min-height: 100lvh;"
            },
            {
                name: "min-h-dvh",
                rule: "min-height: 100dvh;"
            },
            {
                name: "min-h-min",
                rule: "min-height: min-content;"
            },
            {
                name: "min-h-max",
                rule: "min-height: max-content;"
            },
            {
                name: "min-h-fit",
                rule: "min-height: fit-content;"
            },
            ...SIZES.map((size) => ({
                name: `min-h-${size}`,
                rule: `min-height: ${size * BASE_REM}rem; /* ${size * 4}px */`
            })),
        ];

        return {
            output: renderRules(rules)
        }
    }
}