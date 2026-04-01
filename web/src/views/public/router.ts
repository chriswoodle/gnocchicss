import Layout from './layout.vue';
import Home from './home.vue';
import PrivacyPolicy from './privacy-policy.vue';
import TermsOfService from './terms-of-service.vue';

export const RouteNames = {
    Home: 'public:home',
    PrivacyPolicy: 'public:privacy-policy',
    TermsOfService: 'public:terms-of-service',
} as const;

export const routes = [
    {
        path: '', component: Layout,
        children: [
            { path: '', component: Home, name: RouteNames.Home },
            { path: 'privacy-policy', component: PrivacyPolicy, name: RouteNames.PrivacyPolicy },
            { path: 'terms-of-service', component: TermsOfService, name: RouteNames.TermsOfService },
        ],
    },
]