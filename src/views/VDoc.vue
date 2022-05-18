<script setup>
const installText = '\`\`\` bash \n  npm install gt-front-ui@0.0.12 \n \`\`\`';
const importCss0 = `
GT元件樣式引入擇一載入
\`\`\` html
  <!-- index.html -->
  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.12/dist/GT/style.css"/>
\`\`\`

\`\`\` js
  // main.js
  import "https://unpkg.com/gt-front-ui@0.0.12/dist/GT/style.css"
\`\`\`

`;

const importCss1 = `
Element覆寫擇一種載入
\`\`\` html
  <!-- index.html -->
  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.12/dist/Element/style.css"/>
\`\`\`

\`\`\` js
  // main.js
  import "https://unpkg.com/gt-front-ui@0.0.12/dist/Element/style.css"
\`\`\`

`;

const importCss2 = `
Quasar覆寫擇一種載入
\`\`\` html
  <!-- index.html -->
  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.12/dist/Quasar/style.css"/>
\`\`\`

\`\`\` js
  // main.js
  import "https://unpkg.com/gt-front-ui@0.0.12/dist/Quasar/style.css"
\`\`\`

`;

const tailwindText = `\`\`\` scss  
  @forward 'element-plus/theme-chalk/src/common/var.scss' with ( 
        $colors: (
        'primary': (
            'base': #3bb071
        ),
        'danger':(
            'base': #FC806F
        )
    )
  );    
 \`\`\``;
const quasarText = `\`\`\` scss  
  // FILE (create it): src/quasar-variables.sass
  $primary   : #3bb071
  $warning : #FC806F
 \`\`\``;

const useText = {
  lib: `\`\`\` html
  //ex gt-e-input-plain 、 gt-q-btn
  <el-input class="gt-e-input-plain" v-model="inputs.input0" placeholder="我是輸入框" />
  <q-btn class="gt-q-btn" color="primary" label="原生primary" />
 \`\`\``,
  gt: `\`\`\` js
  import { GButton, GIcons, GTitle, GLayout, GLoading } from 'gt-front-ui';
 \`\`\``,
};
</script>

<template>
  <div class="pb-8 flex justify-center items-center flex-col">
    <div class="paragraphHead" id="dev">
      <g-title :level="1" class="mb-4">版號</g-title>
    </div>
    <div class="mb-8 w-full md:w-3/4 mx-auto">
      <p>v0.0.12</p>
      <p>打包方式調整、class名稱規則調整</p>
    </div>

    <div class="paragraphHead" id="dev">
      <g-title :level="1" class="mb-4">支援</g-title>
    </div>
    <div class="mb-8 w-full md:w-3/4 mx-auto">
      <p>1.Vue3環境</p>
      <p>2.elementPlus版本:'^2.1.11'</p>
      <p>3.Quasar版本:'^2.5.5'</p>
    </div>
  </div>

  <div class="pb-8 flex justify-center items-center flex-col">
    <div class="paragraphHead" id="dev">
      <g-title :level="1" class="mb-4">使用方式</g-title>
    </div>
    <div class="mb-8 w-full md:w-3/4 mx-auto">
      <p>
        1.ElementPlus或Quasar元件，加上套件英文小寫(e、q)，和覆寫樣式的class名稱
        <v-md-editor v-model="useText.lib" mode="preview"></v-md-editor>
      </p>

      <p>
        2.import GT另外開發的元件，如layout、過場效果

        <v-md-editor v-model="useText.gt" mode="preview"></v-md-editor>
      </p>
    </div>
  </div>

  <div class="pb-8 flex justify-center items-center flex-col">
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4" id="install">安裝</g-title>
    </div>
    <div class="mb-8 w-full md:w-3/4 mx-auto">
      <p>
        1.使用到GT開發的元件
        <v-md-editor v-model="installText" mode="preview"></v-md-editor>
        <v-md-editor v-model="importCss0" mode="preview"></v-md-editor>
      </p>

      <p>
        2.使用ElementPlus覆寫樣式或Quasar覆寫樣式 (<a
          class="text-second"
          href="https://unpkg.com/browse/gt-front-ui@0.0.12/dist/"
          >原則上選擇最新版本號</a
        >)
        <v-md-editor v-model="importCss1" mode="preview"></v-md-editor>
        <v-md-editor v-model="importCss2" mode="preview"></v-md-editor>
      </p>
      <p>
        3.專案使用elementPlus需要再覆寫基礎的變數定義<br />
        因該UI庫會依照基礎定義的變數再產生各元件的css變數來使用，所以依照官網的建議方式調整會比較完整覆蓋到各元件的使用。
        <br />
        <a
          class="text-second"
          href="https://element-plus.org/zh-CN/guide/theming.html#%E5%A6%82%E4%BD%95%E8%A6%86%E7%9B%96%E5%AE%83%EF%BC%9F"
          >element-plus. doc</a
        >
        <v-md-editor v-model="tailwindText" mode="preview"></v-md-editor>
      </p>
      <p>
        4.專案使用Quasar需要再覆寫基礎的變數定義<br />
        因該UI庫會依照基礎定義的變數再產生各元件的css變數來使用，所以依照官網的建議方式調整會比較完整覆蓋到各元件的使用。
        <br />
        <a class="text-second" href="https://quasar.dev/start/vite-plugin"
          >quasar. doc</a
        >
        <v-md-editor v-model="quasarText" mode="preview"></v-md-editor>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
</style>
