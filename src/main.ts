import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './assets/tailwind.css';
import { VueQueryPlugin } from '@tanstack/vue-query'

createApp(App).use(router).use(VueQueryPlugin).mount('#app');
