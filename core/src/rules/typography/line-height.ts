import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class LineHeight implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "leading-3",
                rule: "line-height: .75rem; /* 12px */"
            },
            {
                name: "leading-4",
                rule: "line-height: 1rem; /* 16px */"
            },
            {
                name: "leading-5",
                rule: "line-height: 1.25rem; /* 20px */"
            },
            {
                name: "leading-6",
                rule: "line-height: 1.5rem; /* 24px */"
            },
            {
                name: "leading-7",
                rule: "line-height: 1.75rem; /* 28px */"
            },
            {
                name: "leading-8",
                rule: "line-height: 2rem; /* 32px */"
            },
            {
                name: "leading-9",
                rule: "line-height: 2.25rem; /* 36px */"
            },
            {
                name: "leading-10",
                rule: "line-height: 2.5rem; /* 40px */"
            },
            {
                name: "leading-none",
                rule: "line-height: 1;"
            },
            {
                name: "leading-tight",
                rule: "line-height: 1.25;"
            },
            {
                name: "leading-snug",
                rule: "line-height: 1.375;"
            },
            {
                name: "leading-normal",
                rule: "line-height: 1.5;"
            },
            {
                name: "leading-relaxed",
                rule: "line-height: 1.625;"
            },
            {
                name: "leading-loose",
                rule: "line-height: 2;"
            }
        ].map(r => ({ ...r, category: 'typography', section: 'line-height' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
} 