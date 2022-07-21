<script setup>
const installText = '\`\`\` bash \n  npm install gt-front-ui@0.0.21 \n \`\`\`';
const importCss0 = `
\`\`\` html
  //index.html
  <!-- 載入css方式一 -->
  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.21/dist/GT/style.css"/>
\`\`\`

\`\`\` css
  //style.css
  @import "https://unpkg.com/gt-front-ui@0.0.21/dist/GT/style.css"
\`\`\`

`;

const importCss1 = `

\`\`\` html
  //index.html
  <!-- Element -->
  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.21/dist/Element/style.css"/>
  <!-- Quasar -->
  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.21/dist/Quasar/style.css"/>
\`\`\`

\`\`\` css
  //style.css
  //Element
  @import "https://unpkg.com/gt-front-ui@0.0.21/dist/Element/style.css"
  //Quasar
  @import "https://unpkg.com/gt-front-ui@0.0.21/dist/Quasar/style.css"
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
  $gt-primary: #32A03D;
  $gt-darker: #2B9749;
  $gt-pop-up: #F6E488;
  $gt-soft: #E0F2DE;
  $gt-hover:#EEF5EB;
  $gt-pressing:#DBE9D8;
  $gt-form-hover:#F1F9F3;
  $gt-bg:#FBFBF9;
  $gt-gray:#D9D9D9;
  $gt-gray-variant:#AAAAAA;
  $gt-gray-light:#F0F0F0;
  $gt-gray-dark:#666666;

  // 定義tag顏色
  $gt-tag-normal:#4F9FFC;
  $gt-tag-normal-bg:#F6F7F9;

  $gt-tag-danger:#FC806F;
  $gt-tag-danger-bg:#FEF6F6;

  $gt-tag-warning:#FFB526;
  $gt-tag-warning-bg:#FEFAF1;

  $gt-tag-activity:#FF8E26;

  // 定義button顏色
  $gt-primary-hover:$gt-darker;

  $gt-positive:#517BBA;
  $gt-positive-hover:#40659F;

  $gt-negative:#FC806F;
  $gt-negative-hover:#EC7869;

  $gt-warning:#FAAF1D;
  $gt-warning-hover:#E19E1B;

  $gt-info:#F0F0F0;
  $gt-info-hover:$gt-gray;

  // 定義文字顏色
  $gt-text-dark:#303236;
  $gt-text-gray:#55585E;

  // 定義陰影
  $gt-shadow: 0 5px 20px 0 rgba(0,0,0,.1);

  $primary   : $gt-primary;  // 正常
  $positive  : $gt-positive;// 成功
  $negative  : $gt-negative;  // 負面
  $warning   : $gt-warning; // 警告

  $secondary : #26A69A;
  $accent    : #dd4b39;
  $dark      : #1D1D1D;
  $info      : #31CCEC;
 \`\`\``;
</script>

<template>
  <div class="pb-8 flex justify-center items-center flex-col">
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4" id="install">使用到GT元件</g-title>
    </div>
    <div class="mb-8 w-full md:w-3/4 mx-auto">
      <p>
        <v-md-editor v-model="installText" mode="preview"></v-md-editor>
        <v-md-editor v-model="importCss0" mode="preview"></v-md-editor>
      </p>
    </div>
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4" id="install"
        >使用ElementPlus或Quasar的覆寫樣式</g-title
      >
    </div>
    <div class="mb-8 w-full md:w-3/4 mx-auto">
      (<a
        class="text-second"
        href="https://unpkg.com/browse/gt-front-ui@0.0.21/dist/"
        >原則上選擇最新版本號</a
      >)

      <p>
        <v-md-editor v-model="importCss1" mode="preview"></v-md-editor>
      </p>
      <p>
        *專案使用elementPlus需要再覆寫基礎的變數定義 //待補充<br />
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
        *專案使用Quasar需要再覆寫基礎的變數定義 //待補充<br />
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

<style lang="scss"></style>
