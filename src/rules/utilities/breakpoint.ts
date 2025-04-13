import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { GeneratedPartial, RuleGenerator, UserConfig } from "../../types.js";
import { escapeName } from "../../utils.js";

@Injectable()
export class Breakpoint implements RuleGenerator {
    constructor(
        @Inject() private readonly config: ConfigService<UserConfig>
    ) { }

    generate(): GeneratedPartial {
        const result: string[] = [];

        for (const [key, value] of Object.entries(this.config.get('breakpoints', { infer: true }))) {
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

