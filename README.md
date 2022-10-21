# GT UI專案

## 開發

- node 14.20.0

- 啟動開發環境
**npm run dev**

- 更新各元件開發文檔
**npm run doc**
此腳本生成:gtDoc.js、gtDocTable.js、VGtComponent.vue..等檔案


## 展示頁面發佈 
- **npm run doc**
產出相應需要的元件說明文檔

- **npm run demo**
產出./demo的展示頁面打包結果

- **npm run deploy** 
部署去github page。

## 問題紀錄與暫時解決方案
1. mac新環境 npm install 會報錯 
目前看來.npmrc會將package指向私有倉庫時，npm沒有辦法找到倚賴的套件。
暫時解決方案：新環境使用時先把.npmrc刪除，再install後把.npmrc設回來。

2. mac新環境 npm run dev 會報錯 
目前看來package-lock.json會有紀錄上的問題。
暫時解決方案：把ackage-lock.json、node_modules夾刪除，再去npm install和npm run dev。

