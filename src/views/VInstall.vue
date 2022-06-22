<script setup>
const installText = '\`\`\` bash \n  npm install gt-front-ui@0.0.15 \n \`\`\`';
const importCss0 = `
\`\`\` html
  //index.html
  <!-- 載入css方式一 -->
  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.15/dist/GT/style.css"/>
\`\`\`

\`\`\` css
  //style.css
  @import "https://unpkg.com/gt-front-ui@0.0.15/dist/GT/style.css"
\`\`\`

`;

const importCss1 = `

\`\`\` html
  //index.html
  <!-- Element -->
  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.15/dist/Element/style.css"/>
  <!-- Quasar -->
  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.15/dist/Quasar/style.css"/>
\`\`\`

\`\`\` css
  //style.css
  //Element
  @import "https://unpkg.com/gt-front-ui@0.0.15/dist/Element/style.css"
  //Quasar
  @import "https://unpkg.com/gt-front-ui@0.0.15/dist/Quasar/style.css"
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
</script>

<template>
  <div class="pb-8 flex justify-center items-center flex-col">
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4" id="install">建議使用</g-title>
    </div>
    <div class="mb-8 w-full md:w-3/4 mx-auto">
      <g-title :level="2" class="mb-4" id="install"> 使用到GT開發 </g-title>
      <p>
        <v-md-editor v-model="installText" mode="preview"></v-md-editor>
        <v-md-editor v-model="importCss0" mode="preview"></v-md-editor>
      </p>
    </div>
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4" id="install">選擇使用</g-title>
    </div>
    <div class="mb-8 w-full md:w-3/4 mx-auto">
      <g-title :level="2" class="mb-4" id="install">
        使用ElementPlus覆寫樣式或Quasar覆寫樣式 (<a
          class="text-second"
          href="https://unpkg.com/browse/gt-front-ui@0.0.15/dist/"
          >原則上選擇最新版本號</a
        >)
      </g-title>
      <p>
        <v-md-editor v-model="importCss1" mode="preview"></v-md-editor>
      </p>
      <p>
        *專案使用elementPlus需要再覆寫基礎的變數定義<br />
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
        *專案使用Quasar需要再覆寫基礎的變數定義<br />
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
