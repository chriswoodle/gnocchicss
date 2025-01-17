import * as fs from 'fs';
import * as path from 'path';
import { ConfigSchema, UserConfig } from "./types.js";
import * as constants from './constants.js';

export async function configuration() {
    let loadedConfig;
    try {
        const configPath = path.resolve(__dirname, '..', 'config.json');
        loadedConfig = fs.readFileSync(configPath, 'utf8');
    } catch (error) {
        return mergeDefaultConfig({});
    }

    const userConfig = await ConfigSchema.parseAsync(JSON.parse(loadedConfig));
    return mergeDefaultConfig(userConfig);
}

export function mergeDefaultConfig(userConfig: UserConfig) {
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
    }
    return config;
}