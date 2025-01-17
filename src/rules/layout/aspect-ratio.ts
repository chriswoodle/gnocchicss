import { Injectable } from "@nestjs/common";
import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class AspectRatio implements RuleGenerator {
    generate(): GeneratedPartial {
        const rules: Rule[] = [
            {
                name: "aspect-auto",
                rule: "aspect-ratio: auto;"
            },
            {
                name: "aspect-square",
                rule: "aspect-ratio: 1 / 1;"
            },
            {
                name: "aspect-video",
                rule: "aspect-ratio: 16 / 9;"
            },
        ];

        return {
            output: renderRules(rules)
        }
    }
}