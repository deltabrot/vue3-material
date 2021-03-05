import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
import Vue3Material from '@/entry.esm';

createApp(App)
    .use(Vue3Material)
    .use(router)
    .mount('#app');
