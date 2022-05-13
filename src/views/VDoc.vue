<script setup>
const installText = '\`\`\` bash \n  npm install gt-front-ui \n \`\`\`';
const importCss1 =
  '\`\`\` js \n  \/\/ index.html  \n <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.2/dist/style.css"/> \n \`\`\`';
const importCss2 =
  '\`\`\` js \n  \/\/ main.js  \n import "https://unpkg.com/gt-front-ui@0.0.2/dist/style.css" \n \`\`\`';

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
</script>

<template>
  <div class="pb-8 flex justify-center items-center flex-col">
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
      <g-title :level="1" class="mb-4">使用</g-title>
    </div>
    <div class="mb-8 w-full md:w-3/4 mx-auto">
      <p>1.使用ElementPlus或Quasar元件，加上由gt ui重新覆寫的class名稱</p>
      <p>2.使用GT另外開發的元件，如layout、過場效果</p>
      <p>
        兩者class定義的規則:前綴加"gt-"，後踩駝峰
        ex.gt-gt-tabs、gt-title、gt-btnFlat
      </p>
    </div>
  </div>

  <div class="pb-8 flex justify-center items-center flex-col">
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4" id="install">安裝</g-title>
    </div>
    <div class="mb-8 w-full md:w-3/4 mx-auto">
      <p>
        Step1 <br /><a
          class="text-second"
          href="https://www.npmjs.com/package/gt-front-ui"
          >npm package</a
        >
        <v-md-editor v-model="installText" mode="preview"></v-md-editor>
      </p>

      <p>
        Step2.引入該版本號的css檔<br /><a
          class="text-second"
          href="https://unpkg.com/browse/gt-front-ui@0.0.2/dist/"
          >選擇最新版本號</a
        ><br />兩種方式擇一<br />
        <v-md-editor v-model="importCss1" mode="preview"></v-md-editor>
        <v-md-editor v-model="importCss2" mode="preview"></v-md-editor>
      </p>
      <p>
        Step3.實際專案引入elementPlus的設定參照官網文件，需要如'assets/elementPlusInit.scss'覆寫基礎的變數定義。<br />
        <a
          class="text-second"
          href="https://element-plus.org/zh-CN/guide/theming.html#%E5%A6%82%E4%BD%95%E8%A6%86%E7%9B%96%E5%AE%83%EF%BC%9F"
          >element-plus. doc</a
        >
        <v-md-editor v-model="tailwindText" mode="preview"></v-md-editor>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.vuepress-markdown-body {
  padding: 0 !important;
}
</style>
