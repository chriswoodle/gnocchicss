import { GeneratedPartial, RuleGenerator } from "../../types.js";
import { escapeName } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Container implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const result: string[] = [];

        result.push(`@use "breakpoint" as *;`);

        result.push(`.container {`);
        result.push(`    width: 100%;`);
        for (const [key, value] of Object.entries(this.config.breakpoints)) {
            result.push(`    @include ${escapeName(key)} {`);
            result.push(`        max-width: ${value}px;`);
            result.push(`    }`);
        }
        result.push(`}`);

        return {
            rules: [],
            output: result.join("\n")
        }
    }
}

