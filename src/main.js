import { createApp } from 'vue';
import { Quasar } from 'quasar';
import App from './App.vue';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass'
import 'packagesQuaEle/quasar.scss'
import ElementPlus from 'element-plus';
import 'packages/assets/tailwindInit.css';
import 'packagesQuaEle/elementPlus.scss';
import router from './routers/index';

import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import createHighlightLinesPlugin from '@kangc/v-md-editor/lib/plugins/highlight-lines/index';
import '@kangc/v-md-editor/lib/plugins/highlight-lines/highlight-lines.css';
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
import 'element-plus/theme-chalk/src/index.scss';

// Prism
import Prism from 'prismjs';
// highlight code
import 'prismjs/components/prism-json';

// import GtUI from '../packages';

import '../dist/GT/style/css/index.css';
import GtUI from '../package/index';

console.log("GtUI",GtUI)

VMdEditor.use(vuepressTheme, {
  Prism,
});

VMdEditor.use(createHighlightLinesPlugin());
VMdEditor.use(createLineNumbertPlugin());

import {
  Loading,
  Notify
} from 'quasar'

const app = createApp(App);

app
  .use(router)
  .use(ElementPlus)
  .use(Quasar, {
    plugins: {
      Loading,
      Notify
    },
    config: {
      notify: { },
      loading: { }
    }
  })
  .use(VMdEditor)
  .use(GtUI)
  .mount('#app');
