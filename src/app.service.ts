import { promises as fs } from 'fs';
import * as path from 'path';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { DiscoveryService } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import type { Importer } from 'sass';
import { GeneratedPartial, UserConfig } from './types.js';
import { convertPascalCaseToKebabCase } from './utils.js';

const __dirname = import.meta.dirname;


@Injectable()
export class AppService {
    private logger = new Logger(AppService.name);

    constructor(
        @Inject() private discoveryService: DiscoveryService,
        @Inject() private config: ConfigService<UserConfig>,
        @Inject('SASS') private sass: typeof import('sass'),
    ) { }

    async run() {
        const outDir = path.resolve(__dirname, "../styles");
        const cssDir = path.resolve(outDir, "css");

        this.logger.log("Running Gnocchicss generation...");
        await fs.mkdir(outDir, { recursive: true });
        await fs.mkdir(cssDir, { recursive: true });

        const virtualFileMapping = await this.generateVirtual();
        await Promise.all(Object.entries(virtualFileMapping).map(([file, content]) =>
            fs.writeFile(path.resolve(outDir, file), content)
        ));
        this.logger.log("Gnocchicss generation completed");
    }

    async generateVirtual() {
        // Find all providers that have a generate method
        const providers = this.discoveryService.getProviders()
            .map(provider => provider.instance)
            .filter(instance => instance && instance.generate);

        const virtualFileMapping: Record<string, string> = {};
        const partials = await Promise.all<{ ruleFileName: string, result: GeneratedPartial }>(providers.map(async provider => {
            let result: GeneratedPartial;
            try {
                result = provider.generate();
            } catch (error) {
                error.message = `Failed generating partial for ${provider.constructor.name}, Error: ${error.message}`;
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


        const preflightFile = "preflight.scss";
        const preflightContent = await fs.readFile(path.resolve(__dirname, '..', 'lib', preflightFile), "utf-8");
        virtualFileMapping[preflightFile] = preflightContent;

        const indexFile = "index.scss";
        const indexContent =
            `@forward "${preflightFile}"; \n` +
            partials.map(partial => `@forward "${partial.ruleFileName}";`).join("\n");

        virtualFileMapping[indexFile] = indexContent;

        partials.map(partial => virtualFileMapping[`_${partial.ruleFileName}.scss`] = partial.result.output);

        const compiler = await this.sass.initAsyncCompiler();

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

        await Promise.all(partials.map(async partial => {
            virtualFileMapping[`${partial.ruleFileName}.css`] = (await compiler.compileStringAsync(partial.result.output, { style: 'expanded', importers: [importer] })).css;
        }))

        await compiler.dispose();

        return virtualFileMapping;
    }
}
