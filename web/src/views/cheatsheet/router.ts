import Layout from './layout.vue';
import Cheatsheet from './cheatsheet.vue';

export const RouteNames = {
    Cheatsheet: 'cheatsheet:cheatsheet',
} as const;

export const routes = [
    {
        path: '', component: Layout,
        children: [
            { path: 'cheatsheet', component: Cheatsheet, name: RouteNames.Cheatsheet },
        ],
    },
]