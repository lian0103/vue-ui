import { createApp } from 'vue';
import App from './App.vue';
import router from './routers/index';
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import createHighlightLinesPlugin from '@kangc/v-md-editor/lib/plugins/highlight-lines/index';
import '@kangc/v-md-editor/lib/plugins/highlight-lines/highlight-lines.css';
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';
import './assets/init.css';
import '../package/assets/scss/index.scss';
import '../package-chart/assets/scss/index.scss';

import GtUIDev from '../package/index';
import GtUIProd from '../dist/gt-ui.es.min.js';
import GtUIChartDev from '../package-chart/index';
import GtUIChartProd from '../dist/chart/gt-ui-chart.es.min.js';

const GtUI = import.meta.env.MODE === 'development' ? GtUIDev : GtUIProd;
const GtUIChart = import.meta.env.MODE === 'development' ? GtUIChartDev : GtUIChartProd;

console.log('GtUI', GtUI);
console.log('GtUIChart', GtUIChart);

VMdEditor.use(vuepressTheme, {
  Prism,
});

VMdEditor.use(createHighlightLinesPlugin());
VMdEditor.use(createLineNumbertPlugin());

const app = createApp(App);

app.use(router).use(VMdEditor).use(GtUI).use(GtUIChart).mount('#app');
