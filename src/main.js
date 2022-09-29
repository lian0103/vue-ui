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

// import GtUI from '../package/index';

import GtUI from '../dist/gt-ui.es.min.js';

console.log('GtUI', GtUI);

VMdEditor.use(vuepressTheme, {
  Prism,
});

VMdEditor.use(createHighlightLinesPlugin());
VMdEditor.use(createLineNumbertPlugin());

const app = createApp(App);

app.use(router).use(VMdEditor).use(GtUI).mount('#app');
