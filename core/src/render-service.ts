import { GeneratedPartial } from "./types.js";
import { preflight } from "./preflight.js";
import { convertPascalCaseToKebabCase } from "./utils.js";
import { initGenerators } from './rules/index.js';
import { MergedConfig } from "./config.js";

export class RenderService {
    constructor(
        private config: MergedConfig,
    ) { }

    async prerender() {
        const providers = initGenerators(this.config)

        const virtualFileMapping: Record<string, string> = {};

        const preflightContent = preflight;
        const partials: {
            result: GeneratedPartial,
            ruleFileName: string,
        }[] = [
                {
                    result: {
                        rules: [],
                        output: preflightContent,
                    },
                    ruleFileName: "preflight",
                },

                ...(await this.loadPartials(providers))
            ];

        const indexFile = "index.scss";
        const indexContent = partials.map(partial => `@forward "${partial.ruleFileName}";`).join("\n");

        virtualFileMapping[indexFile] = indexContent;

        for (const partial of partials) {
            virtualFileMapping[`_${partial.ruleFileName}.scss`] = partial.result.output;
        }

        return {
            virtualFileMapping,
            partials,
        };

    }

    private async loadPartials(providers: any[]) {
        return Promise.all<{ ruleFileName: string, result: GeneratedPartial }>(providers.map(async provider => {
            let result: GeneratedPartial;
            try {
                result = provider.generate();
            } catch (error) {
                if (error instanceof Error) {
                    error.message = `Failed generating partial for ${provider.constructor.name}, Error: ${error.message}`;
                }
                throw error;
            }
            const ruleFileName = convertPascalCaseToKebabCase(provider.constructor.name.replace(/^_/, ''))
            if (!result.output) {
                throw new Error(`Failed generating partial for ${provider.constructor.name}, Output is empty`);
            }
            if (!ruleFileName) {
                throw new Error(`Failed generating partial for ${provider.constructor.name}, Rule file name is empty`);
            }
            return {
                result,
                ruleFileName,
            }
        }));
    }

}
