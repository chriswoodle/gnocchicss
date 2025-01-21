import { NestFactory } from "@nestjs/core";
import { UserConfig } from "./types.js";
import { AppModule } from "./app.module.js";
import { AppService } from "./app.service.js";
import type { Importer } from "sass";

const gnocchicssVirtualModuleId = 'gnocchicss'

export default function gnocchicssPlugin(userConfig: UserConfig) {
    let virtualFileMapping: Record<string, string> = {};

    return {
        name: 'gnocchicss',
        enforce: "pre" as const,
        async buildStart(options) {
            this.info("buildStart");
            const app = await NestFactory.createApplicationContext(await AppModule.forRootAsync(userConfig));
            const mappings = await app.get(AppService).generateVirtual();

            for (const [file, content] of Object.entries(mappings)) {
                // if (file.endsWith('.css')) {
                //     if (process.env.NODE_ENV === 'production') {
                //         const referenceId = this.emitFile({
                //             type: 'asset',
                //             fileName: file,
                //             source: content,
                //         });
                //     }
                // }
                virtualFileMapping[file] = content;
            }

            await app.close();
        },

        config() {
            const importer: Importer = {
                canonicalize(url, context) {
                    if (url === gnocchicssVirtualModuleId) {
                        return new URL(`sass-virtual:${gnocchicssVirtualModuleId}`);
                    }
                    if (url.startsWith('sass-virtual:')) {
                        return new URL(url);
                    }
                    return null;
                },
                load(canonicalUrl) {
                    if (canonicalUrl.protocol === 'sass-virtual:') {
                        const pathname = canonicalUrl.pathname == gnocchicssVirtualModuleId ? 'index' : "_" + canonicalUrl.pathname;
                        const virtualFile = virtualFileMapping[`${pathname}.scss`];
                        return {
                            contents: virtualFile,
                            syntax: 'scss'
                        };
                    }
                    return null;
                }
            }

            return {
                css: {
                    preprocessorOptions: {
                        scss: {
                            importers: [importer]
                        }
                    }
                }
            };
        }
    }
}