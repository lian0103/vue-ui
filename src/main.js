import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import './assets/tailwindInit.css';
import './assets/elementPlus.scss';

const app = createApp(App);

app.use(ElementPlus).mount('#app');
