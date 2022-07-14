<script setup>
const installText = '\`\`\` bash \n  npm install gt-front-ui@0.0.19 \n \`\`\`';
const importCss0 = `
GT元件樣式引入擇一載入
\`\`\` html
  <!-- index.html -->
  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.19/dist/GT/style.css"/>
\`\`\`

\`\`\` js
  // main.js
  import "https://unpkg.com/gt-front-ui@0.0.19/dist/GT/style.css"
\`\`\`

`;

const importCss1 = `
Element覆寫擇一種載入
\`\`\` html
  <!-- index.html -->
  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.19/dist/Element/style.css"/>
\`\`\`

\`\`\` js
  // main.js
  import "https://unpkg.com/gt-front-ui@0.0.19/dist/Element/style.css"
\`\`\`

`;

const importCss2 = `
Quasar覆寫擇一種載入
\`\`\` html
  <!-- index.html -->
  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.19/dist/Quasar/style.css"/>
\`\`\`

\`\`\` js
  // main.js
  import "https://unpkg.com/gt-front-ui@0.0.19/dist/Quasar/style.css"
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
</template>

<style lang="scss"></style>
