import { Injectable } from "@nestjs/common";
import { ALL_FRACTIONS, BASE_REM, SIZES } from "../../constants.js";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class FlexBasis implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "basis-auto",
                rule: "flex-basis: auto;"
            },
            {
                name: "basis-0",
                rule: "flex-basis: 0;"
            },
            {
                name: "basis-px",
                rule: "flex-basis: 1px;"
            },
            ...ALL_FRACTIONS.map(([name, value]) => ({
                name: `basis-${name}`,
                rule: `flex-basis: ${value * 100}%;`
            })),
            ...SIZES.map((size) => ({
                name: `basis-${size}`,
                rule: `flex-basis: ${size * BASE_REM}rem; /* ${size * 4}px */`
            })),
        ];

        return {
            rules,
            output: renderRules(rules)
        }
    }
}