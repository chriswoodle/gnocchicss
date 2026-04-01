import { UserConfig } from "./types.js";
import * as constants from './constants.js';

export function mergeDefaultConfig(userConfig: UserConfig = {}) {
    const config = {
        breakpoints: {
            ...constants.BREAKPOINTS,
            ...(userConfig.breakpoints ? userConfig.breakpoints : {})
        },
        colors: {
            ...constants.COLORS,
            ...(userConfig.colors ? userConfig.colors : {})
        },
        opacity: [
            ...constants.OPACITY,
            ...(userConfig.opacity ? userConfig.opacity : [])
        ]
    } satisfies UserConfig;
    return config;
}

export type MergedConfig = ReturnType<typeof mergeDefaultConfig>;