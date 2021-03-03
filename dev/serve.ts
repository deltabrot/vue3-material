import { createApp } from 'vue';
import App from './app.vue';
import Vue3Material from '@/entry.esm';
import router from './router';

const app = createApp(App);

app.use(Vue3Material);
app.use(router);

app.mount('#app');
