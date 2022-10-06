<script setup>
const filesText = `
# @greattree/front-ui-chart

## 元件庫安裝
**npm install @greattree/front-ui --registry=https://npmrg.greattree.com.tw/repository/npm-gt/**
安裝時要指定私有倉庫地址，公司外網應可能無法使用。

## 使用GT Graph

全域安裝
\`\`\`javascript
// main.js
// 載入UI的樣式檔和模組
import '@greattree/front-ui/dist/assets/css/index.scss';

import GtUIChart from '@greattree/front-ui-chart';
// or
import GtUIChart from '@greattree/front-ui-chart/dist/gt-ui-chart.es.min.js';

// 透過use方法會觸發GtUI install
app.use(GtUIChart).mount('#app');
\`\`\`

## 開發專案配置
所有元件位於 package-chart結構下。
package-chart
|    
|__ scripts 包含專案使用到的npm、sh腳本
|     
|__ assets 元件包內的靜態資源(font svg scss) 
|     
|__ components 元件包內使用的元件，但沒有列在發佈的元件清單內
|     
|__ gt-components 所有@greattree/front-ui發佈的元件，每個元件再各自有獨立的demo、src夾
|      
|__ components.json 透過**npm run gen:component**新增元件後的元件清單
|      
|__ dist 透過**npm run build**產生的結果
|      
|__ index.js 透過**npm run gen** 、 **npm run build**產生
    
## 指定私有庫
- 使用 **.npmrc** 設定檔
\`\`\`npmrc
# .npmrc

# 指定@greattree/front-ui-chart的倉庫地址
@greattree:registry=https://npmrg.greattree.com.tw/repository/npm-gt/

# 使用npm安裝套件時 會優先指向這個私有倉庫 如果沒有才會再去公開庫查找
registry=https://npmrg.greattree.com.tw/repository/npm-gt/

\`\`\`

## 打包
- **npm run build**

## 打包發佈

-- **npm login --registry=https://npmrg.greattree.com.tw/repository/npm-gt/**
登入私有庫空間

-- **npm publish**
留意版號規則

> 2022.10.06 更新

`;
</script>

<template>
  <div class="pb-8 flex justify-center items-center flex-col">
    <div class="paragraphHead" id="dev">
      <g-title :level="1" class="mb-4">支援</g-title>
    </div>
    <div class="mb-8 w-full md:w-3/4 mx-auto">
      <p>- Vue3專案</p>
    </div>
    <div class="mb-8 w-full md:w-3/4 mx-auto">
      <v-md-editor v-model="filesText" mode="preview"></v-md-editor>
    </div>
  </div>
</template>

<style lang="scss"></style>
