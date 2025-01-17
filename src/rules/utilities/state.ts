import { Injectable } from "@nestjs/common";
import { GeneratedPartial, RuleGenerator } from "../../types.js";

@Injectable()
export class State implements RuleGenerator {
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
            output: result.join("\n")
        }
    }
}