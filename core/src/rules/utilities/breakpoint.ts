import { GeneratedPartial, RuleGenerator } from "../../types.js";
import { escapeName } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Breakpoint implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const result: string[] = [];

        for (const [key, value] of Object.entries(this.config.breakpoints)) {
            result.push(`@mixin ${escapeName(key)} {`);
            result.push(`    @media (min-width: ${value}px) {`);
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

