<script setup></script>

<template>
  <div class="py-12 flex justify-center items-center flex-col">
    <div class="paragraphHead" id="dev">
      <g-title :level="1" class="mb-4">開發</g-title>
    </div>
    <div class="mb-8 w-full md:w-3/4 mx-auto">
      <p>1.使用vue3語法撰寫元件功能</p>
      <p>2.elementPlus版本:'^2.1.11'</p>
      <p>3.Quasar版本:'^2.6.6'</p>
    </div>
  </div>

  <div class="py-12 flex justify-center items-center flex-col">
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4" id="install">安裝</g-title>
    </div>
    <div class="mb-8 w-full md:w-3/4 mx-auto">
      <p>
        1.npm i gt-front-ui <br /><a
          class="text-second"
          href="https://www.npmjs.com/package/gt-front-ui"
          >npm package</a
        >
      </p>
      <p>
        2.引入該版本號的css檔<br /><a
          class="text-second"
          href="https://unpkg.com/browse/gt-front-ui@0.0.2/dist/"
          >選擇最新版本號</a
        ><br />兩種方式:<br />{{`<link
          rel="stylesheet"
          href="https://unpkg.com/gt-front-ui@0.0.2/dist/style.css"
        />`}}<br />
        {{ `import 'https://unpkg.com/gt-front-ui@0.0.2/dist/style.css'` }}
      </p>
      <p>
        3.實際專案引入elementPlus的設定參照官網文件，需要如'assets/elementPlusInit.scss'覆寫基礎的變數定義。<br />
        <a
          class="text-second"
          href="https://element-plus.org/zh-CN/guide/theming.html#%E5%A6%82%E4%BD%95%E8%A6%86%E7%9B%96%E5%AE%83%EF%BC%9F"
          >element-plus. doc</a
        >
      </p>
    </div>
  </div>
</template>

<style lang="scss">

</style>
