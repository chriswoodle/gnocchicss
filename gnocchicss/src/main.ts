import { UserConfig } from '@gnocchicss/core';
import { CompilerService } from './compiler.service.js';
import { loadSass } from './sass.provider.js';

export async function compile(userConfig: UserConfig) {
    const sass = await loadSass();
    const compilerService = new CompilerService(sass);
    const virtualFileMapping = await compilerService.compile(userConfig);

    return { virtualFileMapping };
}
