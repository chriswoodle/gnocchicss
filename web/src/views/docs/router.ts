import Layout from './layout.vue';
import GettingStarted from './getting-started.vue';
import Cli from './cli.vue';
import VitePlugin from './vite-plugin.vue';

export const RouteNames = {
    GettingStarted: 'docs:getting-started',
    Cli: 'docs:cli',
    VitePlugin: 'docs:vite-plugin',
} as const;

export const routes = [
    {
        path: '/docs', component: Layout,
        children: [
            { path: '', component: GettingStarted, name: RouteNames.GettingStarted },
            { path: 'cli', component: Cli, name: RouteNames.Cli },
            { path: 'vite-plugin', component: VitePlugin, name: RouteNames.VitePlugin },
        ],
    },
]
