import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { GeneratedPartial, Rule, RuleGenerator, UserConfig } from "../../types.js";
import { renderRules } from "../../utils.js";

@Injectable()
export class Opacity implements RuleGenerator {
    constructor(
        @Inject() private readonly config: ConfigService<UserConfig>
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            ...this.config.get('opacity', { infer: true }).map(([value, opacity]) => ({
                name: `opacity-${value}`,
                rule: `opacity: ${opacity};`
            })),
        ];

        return {
            output: renderRules(rules)
        }
    }
}