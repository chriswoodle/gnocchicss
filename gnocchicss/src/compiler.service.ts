import { mergeDefaultConfig, RenderService, UserConfig } from "@gnocchicss/core";
import { Importer } from "sass";

export class CompilerService {
    constructor(
        private sass: typeof import('sass'),
    ) { }

    async compile(config: UserConfig = {}) {
        const renderService = new RenderService(mergeDefaultConfig(config));
        const prerenderResult = await renderService.prerender();
        const virtualFileMapping = { ...prerenderResult.virtualFileMapping };

        const importer: Importer = {
            canonicalize(url, context) {
                return new URL(`local:${url}`);
            },
            load(canonicalUrl) {
                if (canonicalUrl.protocol == "local:") {
                    return {
                        contents: virtualFileMapping[`_${canonicalUrl.pathname}.scss`],
                        syntax: "scss",
                    }

                }
                return null;
            }
        }

        const compiler = await this.sass.initAsyncCompiler();
        await Promise.all(prerenderResult.partials.map(async partial => {
            virtualFileMapping[`${partial.ruleFileName}.css`] = (await compiler.compileStringAsync(partial.result.output, { style: 'expanded', importers: [importer] })).css;
        }))
        await compiler.dispose();

        return virtualFileMapping;
    }
}
