import { GeneratedPartial, RuleGenerator } from "../../types.js";
import { MergedConfig } from "../../config.js";

export class State implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const result: string[] = [];

        const states = ["hover", "focus", "active"];

        for (const state of states) {
            result.push(`@mixin ${state} {`);
            result.push(`    &:${state} {`);
            result.push(`        @content;`);
            result.push(`    }`);
            result.push(`}`);
        }

        return {
            rules: [],
            output: result.join("\n")
        }
    }
}