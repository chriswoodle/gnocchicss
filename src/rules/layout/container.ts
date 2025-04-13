import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { GeneratedPartial, RuleGenerator, UserConfig } from "../../types.js";
import { escapeName } from "../../utils.js";

@Injectable()
export class Container implements RuleGenerator {
    constructor(
        @Inject() private readonly config: ConfigService<UserConfig>
    ) { }

    generate(): GeneratedPartial {
        const result: string[] = [];

        result.push(`@use "breakpoint" as *;`);

        result.push(`.container {`);
        result.push(`    width: 100%;`);
        for (const [key, value] of Object.entries(this.config.get('breakpoints', { infer: true }))) {
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

