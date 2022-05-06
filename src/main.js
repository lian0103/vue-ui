import { createApp, ref } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import './assets/tailwindInit.css';
import './assets/elementPlus.css';

const app = createApp(App);

const gLoadinfShow = ref(false);

app.config.globalProperties.handleLoadingTrigger = (bool, time = 3000) => {
  if (bool) {
    gLoadinfShow.value = bool;
    setTimeout(() => {
      gLoadinfShow.value = false;
    }, 2000);
  }
  return gLoadinfShow;
};

console.log(app);

app.use(ElementPlus).mount('#app');
