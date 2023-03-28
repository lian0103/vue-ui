module.exports = {
  show: ['prop','expose'],
  prop: `
## 屬性
| 屬性 | 說明 | 類型 | 可選值 | 默認值 |
| - | - | - |- | -  |
| data | tree結構資料 |Array[TreeItem] ; <br/> TreeItem:Object{label:String,value:Boolean, |  |  |
|||children?:Array[TreeItem],clickCallBack?:Function,disabled?:Boolean} |||  

`,
expose: `
## 暴露
| 名稱 | 說明 | 參數 |
| - | - | - |
| data | 當前的樹狀資料 | 

`,
  method: `
## 方法
| 方法 | 說明 | 參數 |
| - | - | - |
| | | 

`,
  event: `
## 事件
| 事件 | 說明 | 參數 |
| - | - | - |
| | | |

`,
  slot: `
## 插槽
| 插槽 | 說明 | 
| - | - | 
| | | 

`,
};
