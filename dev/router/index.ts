// vue
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/components/app-bar',
    },
    {
        path: '/components/:config',
        name: 'components',
        component: () =>
            import(/* webpackChunkName: "core" */ '../components.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
