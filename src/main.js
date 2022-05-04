import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import './assets/index.css';
import './assets/font.css';
// import 'element-plus/dist/index.css';
// import './assets/elementPlusInit.scss';

createApp(App).use(ElementPlus).mount('#app');
