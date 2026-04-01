import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class FontSize implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "text-xs",
                rule: "font-size: 0.75rem; /* 12px */ line-height: 1rem; /* 16px */"
            },
            {
                name: "text-sm",
                rule: "font-size: 0.875rem; /* 14px */ line-height: 1.25rem; /* 20px */"
            },
            {
                name: "text-base",
                rule: "font-size: 1rem; /* 16px */ line-height: 1.5rem; /* 24px */"
            },
            {
                name: "text-lg",
                rule: "font-size: 1.125rem; /* 18px */ line-height: 1.75rem; /* 28px */"
            },
            {
                name: "text-xl",
                rule: "font-size: 1.25rem; /* 20px */ line-height: 1.75rem; /* 28px */"
            },
            {
                name: "text-2xl",
                rule: "font-size: 1.5rem; /* 24px */ line-height: 2rem; /* 32px */"
            },
            {
                name: "text-3xl",
                rule: "font-size: 1.875rem; /* 30px */ line-height: 2.25rem; /* 36px */"
            },
            {
                name: "text-4xl",
                rule: "font-size: 2.25rem; /* 36px */ line-height: 2.5rem; /* 40px */"
            },
            {
                name: "text-5xl",
                rule: "font-size: 3rem; /* 48px */ line-height: 1;"
            },
            {
                name: "text-6xl",
                rule: "font-size: 3.75rem; /* 60px */ line-height: 1;"
            },
            {
                name: "text-7xl",
                rule: "font-size: 4.5rem; /* 72px */ line-height: 1;"
            },
            {
                name: "text-8xl",
                rule: "font-size: 6rem; /* 96px */ line-height: 1;"
            },
            {
                name: "text-9xl",
                rule: "font-size: 8rem; /* 128px */ line-height: 1;"
            }
        ].map(r => ({ ...r, category: 'typography', section: 'font-size' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
} 