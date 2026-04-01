import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Display implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "block",
                rule: "display: block;"
            },
            {
                name: "inline-block",
                rule: "display: inline-block;"
            },
            {
                name: "inline",
                rule: "display: inline;"
            },
            {
                name: "flex",
                rule: "display: flex;"
            },
            {
                name: "inline-flex",
                rule: "display: inline-flex;"
            },
            {
                name: "table",
                rule: "display: table;"
            },
            {
                name: "inline-table",
                rule: "display: inline-table;"
            },
            {
                name: "table-caption",
                rule: "display: table-caption;"
            },
            {
                name: "table-cell",
                rule: "display: table-cell;"
            },
            {
                name: "table-column",
                rule: "display: table-column;"
            },
            {
                name: "table-column-group",
                rule: "display: table-column-group;"
            },
            {
                name: "table-footer-group",
                rule: "display: table-footer-group;"
            },
            {
                name: "table-header-group",
                rule: "display: table-header-group;"
            },
            {
                name: "table-row-group",
                rule: "display: table-row-group;"
            },
            {
                name: "table-row",
                rule: "display: table-row;"
            },
            {
                name: "flow-root",
                rule: "display: flow-root;"
            },
            {
                name: "grid",
                rule: "display: grid;"
            },
            {
                name: "inline-grid",
                rule: "display: inline-grid;"
            },
            {
                name: "contents",
                rule: "display: contents;"
            },
            {
                name: "list-item",
                rule: "display: list-item;"
            },
            {
                name: "hidden",
                rule: "display: none;"
            }
        ].map(r => ({ ...r, category: 'layout', section: 'display' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}