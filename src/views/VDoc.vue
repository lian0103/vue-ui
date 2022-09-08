<script setup>
const filesText = `
# @greattree/front-ui
所有元件位於 package結構下。
package
|    
|__ .template gulp腳本會使用到的模板檔案
|     
|__ assets 元件包內的靜態資源(font svg scss) 
|     
|__ components 元件包內使用的元件，但沒有列在發佈的元件清單內
|     
|__ gt-components 所有@greattree/front-ui發佈的元件，每個元件再各自有獨立的demo、src夾
|      
|__ components.json 透過**npm run gen:component**新增元件後的元件清單
|      
|__ index.js 透過**npm run gen** 、 **npm run build**產生
    

## 開發專案配置
- 使用**.npmrc**設定檔
\`\`\`npmrc
# .npmrc

# 指定@greattree package的倉庫地址
@greattree:registry=https://npmrg.greattree.com.tw/repository/npm-gt/

# 使用npm安裝套件時 會優先指向這個私有倉庫 如果沒有才會再去公開庫查找
registry=https://npmrg.greattree.com.tw/repository/npm-gt/
\`\`\`


## 開發

- 啟動開發環境
**npm run dev**

- 建立新元件
**npm run gen:component {元件名稱}** 
npm run gen:component button
元件名稱不能重複

- 更新gtDoc 讓新元件的demo.vue能在開發頁面呈現
**npm run gen:pkgDoc**
./src/gtDoc.js 和 ./src/views/VGtComponent.vue 就會自動生成
在dev啟動情況下，也會熱更新不用再重新啟動。

## 打包
- **npm run gen**
- **npm run build**

## 打包發佈
> npm版本6.14 node版本14.16
-- **npm login --registry=https://npmrg.greattree.com.tw/repository/npm-gt/**
登入私有庫空間

-- **npm publish**
留意版號規則

## 展示頁面發佈 
- **npm run gen:pkgDoc**
產出相應需要的元件說明文檔
- **npm run doc**
產出./demo的展示頁面打包結果

optional
- **sh deploy.sh**
部署去github page。

## 元件庫安裝
**npm install @greattree/front-ui --registry=https://npmrg.greattree.com.tw/repository/npm-gt/**
安裝時要指定倉庫地址

## 使用GT UI

全域安裝
\`\`\`javascript
// main.js
// 載入UI的樣式檔和模組
import '@greattree/front-ui/dist/assets/css/index.css';
import GtUI from '@greattree/front-ui';

// 透過use方法會觸發GtUI install
app.use(GtUI).mount('#app');
\`\`\`

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

    <div class="paragraphHead" id="dev">
      <g-title :level="1" class="mb-4"> README.md </g-title>
    </div>
    <div class="mb-8 w-full md:w-3/4 mx-auto">
      <v-md-editor v-model="filesText" mode="preview"></v-md-editor>
    </div>
  </div>
</template>

<style lang="scss"></style>
