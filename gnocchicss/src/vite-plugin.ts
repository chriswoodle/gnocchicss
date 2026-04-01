import type { Importer } from "sass";
import { UserConfig } from "@gnocchicss/core";
import { compile } from "./main.js";

const gnocchicssVirtualModuleId = 'gnocchicss'

export function gnocchicssPlugin(userConfig: UserConfig) {
    let virtualFileMapping: Record<string, string> = {};

    return {
        name: 'gnocchicss',
        enforce: "pre" as const,
        async buildStart() {
            console.log("gnocchicss: buildStart");
            const generated = await compile(userConfig);
            virtualFileMapping = generated.virtualFileMapping;
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