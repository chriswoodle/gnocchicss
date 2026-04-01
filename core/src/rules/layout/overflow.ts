import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Overflow implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "overflow-auto",
                rule: "overflow: auto;"
            },
            {
                name: "overflow-hidden",
                rule: "overflow: hidden;"
            },
            {
                name: "overflow-clip",
                rule: "overflow: clip;"
            },
            {
                name: "overflow-visible",
                rule: "overflow: visible;"
            },
            {
                name: "overflow-scroll",
                rule: "overflow: scroll;"
            },
            {
                name: "overflow-x-auto",
                rule: "overflow-x: auto;"
            },
            {
                name: "overflow-y-auto",
                rule: "overflow-y: auto;"
            },
            {
                name: "overflow-x-hidden",
                rule: "overflow-x: hidden;"
            },
            {
                name: "overflow-y-hidden",
                rule: "overflow-y: hidden;"
            },
            {
                name: "overflow-x-clip",
                rule: "overflow-x: clip;"
            },
            {
                name: "overflow-y-clip",
                rule: "overflow-y: clip;"
            },
            {
                name: "overflow-x-visible",
                rule: "overflow-x: visible;"
            },
            {
                name: "overflow-y-visible",
                rule: "overflow-y: visible;"
            },
            {
                name: "overflow-x-scroll",
                rule: "overflow-x: scroll;"
            },
            {
                name: "overflow-y-scroll",
                rule: "overflow-y: scroll;"
            }
        ].map(r => ({ ...r, category: 'layout', section: 'overflow' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}