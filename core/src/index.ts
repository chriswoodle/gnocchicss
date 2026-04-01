import { mergeDefaultConfig } from './config.js';
import { RenderService } from './render-service.js';
import { UserConfig } from './types.js';

export async function prerender(userConfig: UserConfig) {
    const service = new RenderService(mergeDefaultConfig(userConfig));
    const result = service.prerender();
    return result;
}

export { mergeDefaultConfig } from './config.js';
export { RenderService } from './render-service.js';
export type { MergedConfig } from './config.js';
export type { UserConfig } from './types.js';
export type {  GeneratedPartial, Rule } from './types.js';