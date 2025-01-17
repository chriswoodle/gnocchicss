import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { GeneratedPartial, Rule, RuleGenerator, UserConfig } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class Template implements RuleGenerator {
    constructor(
        @Inject() private readonly config: ConfigService<UserConfig>
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            { name: "break-after-auto", rule: "break-after: auto;" },
        ];

        return {
            output: renderRules(rules)
        }
    }
}
