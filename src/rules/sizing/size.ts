import { Injectable } from "@nestjs/common";
import { ALL_FRACTIONS, BASE_REM, SIZES } from "../../constants.js";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class Size implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "size-auto",
                rule: "width: auto; height: auto;"
            },
            {
                name: "size-0",
                rule: "width: 0; height: 0;"
            },
            {
                name: "size-px",
                rule: "width: 1px; height: 1px;"
            },
            {
                name: "size-min",
                rule: "width: min-content; height: min-content;"
            },
            {
                name: "size-max",
                rule: "width: max-content; height: max-content;"
            },
            {
                name: "size-fit",
                rule: "width: fit-content; height: fit-content;"
            },
            ...ALL_FRACTIONS.map(([name, value]) => ({
                name: `size-${name}`,
                rule: `width: ${value * 100}%; height: ${value * 100}%;`
            })),
            ...SIZES.map((size) => ({
                name: `size-${size}`,
                rule: `width: ${size * BASE_REM}rem; height: ${size * BASE_REM}rem; /* ${size * 4}px */`
            })),

        ];

        return {
            output: renderRules(rules)
        }
    }
}