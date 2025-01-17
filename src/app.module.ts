import * as path from 'path';
import { DiscoveryModule } from '@nestjs/core';
import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service.js';
import { sassProvider } from './sass.provider.js';
import { getProvidersFromDirectory } from './utils.js';
import { configuration, mergeDefaultConfig } from './config.js';
import { UserConfig } from './types.js';

const __dirname = import.meta.dirname;

@Module({})
export class AppModule {
    static async forRootAsync(config?: UserConfig): Promise<DynamicModule> {
        const dynamicModule = {
            module: AppModule,
            imports: [
                DiscoveryModule,
                ConfigModule.forRoot({
                    load: [config ? () => mergeDefaultConfig(config) : configuration],
                }),
            ],
            providers: [
                AppService,
                sassProvider,
                ...(await getProvidersFromDirectory(path.resolve(__dirname, 'rules')))
            ],
            exports: [
                AppService,
            ]
        }
        return dynamicModule;
    }
}