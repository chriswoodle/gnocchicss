
import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class Columns implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "columns-auto",
                rule: "columns: auto;"
            },
            {
                name: "columns-3xs",
                rule: "columns: 16rem; /* 256px */"
            },
            {
                name: "columns-2xs",
                rule: "columns: 18rem; /* 288px */"
            },
            {
                name: "columns-xs",
                rule: "columns: 20rem; /* 320px */"
            },
            {
                name: "columns-sm",
                rule: "columns: 24rem; /* 384px */"
            },
            {
                name: "columns-md",
                rule: "columns: 28rem; /* 448px */"
            },
            {
                name: "columns-lg",
                rule: "columns: 32rem; /* 512px */"
            },
            {
                name: "columns-xl",
                rule: "columns: 36rem; /* 576px */"
            },
            {
                name: "columns-2xl",
                rule: "columns: 42rem; /* 672px */"
            },
            {
                name: "columns-3xl",
                rule: "columns: 48rem; /* 768px */"
            },
            {
                name: "columns-4xl",
                rule: "columns: 56rem; /* 896px */"
            },
            {
                name: "columns-5xl",
                rule: "columns: 64rem; /* 1024px */"
            },
            {
                name: "columns-6xl",
                rule: "columns: 72rem; /* 1152px */"
            },
            {
                name: "columns-7xl",
                rule: "columns: 80rem; /* 1280px */"
            }
        ];

        for (let i = 1; i <= 12; i++) {
            rules.push({
                name: `columns-${i}`,
                rule: `columns: ${i};`,
            });
        }

        return {
            rules,
            output: renderRules(rules)
        }
    }
}

