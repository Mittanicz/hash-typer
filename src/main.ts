import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { i18n } from '@/translations';

import App from './App.vue';
import router from './app/router';

import "@/styles/styles.scss";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(pinia);
app.use(i18n);
app.mount('#app');
