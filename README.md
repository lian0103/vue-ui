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
- 使用 **.npmrc** 設定檔
```npmrc
# .npmrc

# 指定@greattree package的倉庫地址
@greattree:registry=https://npmrg.greattree.com.tw/repository/npm-gt/

# 使用npm安裝套件時 會優先指向這個私有倉庫 如果沒有才會再去公開庫查找
registry=https://npmrg.greattree.com.tw/repository/npm-gt/

```

## 開發

- 啟動開發環境
**npm run dev**

- 建立新元件
**npm run gen:component {元件名稱}** 
npm run gen:component button
元件名稱不能重複

- 更新各元件開發文檔
**npm run doc**
此腳本生成:gtDoc.js、gtDocTable.js、VGtComponent.vue

## 打包
- **npm run gen**
- **npm run build**

## 打包發佈
> npm版本6.14 node版本14.18

-- **npm login --registry=https://npmrg.greattree.com.tw/repository/npm-gt/**
登入私有庫空間

-- **npm publish**
留意版號規則

## 展示頁面發佈 
- **npm run doc**
產出相應需要的元件說明文檔

- **npm run demo**
產出./demo的展示頁面打包結果

- **sh deploy.sh** 
部署去github page。

## 元件庫安裝
**npm install @greattree/front-ui --registry=https://npmrg.greattree.com.tw/repository/npm-gt/**
安裝時要指定倉庫地址。此為私有倉庫，公司外網應無法直接使用。

## 使用GT UI

全域安裝
```javascript
// main.js
// 載入UI的樣式檔和模組
import '@greattree/front-ui/dist/assets/css/index.css';
import GtUI from '@greattree/front-ui';

// 透過use方法會觸發GtUI install
app.use(GtUI).mount('#app');
```