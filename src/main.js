import { createApp } from 'vue';
import { Quasar } from 'quasar';
import App from './App.vue';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/dist/quasar.css';
import ElementPlus from 'element-plus';
import './assets/tailwindInit.css';
import './assets/elementPlus.scss';
import router from './routers/index';

const app = createApp(App);

app
  .use(router)
  .use(ElementPlus)
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })
  .mount('#app');
