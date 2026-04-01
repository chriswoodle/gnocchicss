import * as path from 'path';
import type { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { ViteSSGOptions } from 'vite-ssg';
import { gnocchicssPlugin } from 'gnocchicss';

import dotenv from 'dotenv';
dotenv.config();

// https://vite.dev/config/
const config: UserConfig & { ssgOptions?: ViteSSGOptions } = {
    plugins: [
        vue(),
        gnocchicssPlugin({
            colors: {
                'forest-green': '#386641',
                'sage-green': '#6A994E',
                'lime-green': '#A7C957',
                'cream': '#F2E8CF',
                'terracotta': '#BC4749',
            }
        })
    ],
    optimizeDeps: {
        include: [
            // Mono repo packages here
            '@gnocchicss/core'
        ],
    },
    build: {
        commonjsOptions: {
            include: [
                // Mono repo packages here
                /\@gnocchicss\/core/,
                /node_modules/
            ],
        },
    },
    ssgOptions: {
        script: 'async',
        formatting: 'prettify',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
};

export default config;
