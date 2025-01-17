import { Injectable } from "@nestjs/common";
import { BORDER_WIDTHS } from "../../constants.js";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class BorderWidth implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            ...BORDER_WIDTHS.map(([width, value]) => ({
                name: ['border', width].filter(v => v !== undefined).join('-'),
                rule: `border-width: ${value}px;`
            })),

            ...BORDER_WIDTHS.map(([width, value]) => ({
                name: ['border', 'x', width].filter(v => v !== undefined).join('-'),
                rule: `border-left-width: ${value}px; border-right-width: ${value}px;`
            })),

            ...BORDER_WIDTHS.map(([width, value]) => ({
                name: ['border', 'y', width].filter(v => v !== undefined).join('-'),
                rule: `border-top-width: ${value}px; border-bottom-width: ${value}px;`
            })),

            ...BORDER_WIDTHS.map(([width, value]) => ({
                name: ['border', 's', width].filter(v => v !== undefined).join('-'),
                rule: `border-inline-start-width: ${value}px;`
            })),

            ...BORDER_WIDTHS.map(([width, value]) => ({
                name: ['border', 'e', width].filter(v => v !== undefined).join('-'),
                rule: `border-inline-end-width: ${value}px;`
            })),

            ...BORDER_WIDTHS.map(([width, value]) => ({
                name: ['border', 't', width].filter(v => v !== undefined).join('-'),
                rule: `border-top-width: ${value}px;`
            })),

            ...BORDER_WIDTHS.map(([width, value]) => ({
                name: ['border', 'r', width].filter(v => v !== undefined).join('-'),
                rule: `border-right-width: ${value}px;`
            })),

            ...BORDER_WIDTHS.map(([width, value]) => ({
                name: ['border', 'b', width].filter(v => v !== undefined).join('-'),
                rule: `border-bottom-width: ${value}px;`
            })),

            ...BORDER_WIDTHS.map(([width, value]) => ({
                name: ['border', 'l', width].filter(v => v !== undefined).join('-'),
                rule: `border-left-width: ${value}px;`
            })),
        ];

        return {
            output: renderRules(rules)
        }
    }
}