module.exports = {
  show: ['prop'],
  prop: `
## 屬性
| 屬性 | 說明 | 類型 | 可選值 | 默認值 |
| - | - | - |- | -  |
| bindResult | 回傳值地綁定模式  | String | index,value,label | index |
| multiple | 多選模式  | Boolean | | false |
| v-model | 單選模式、綁定index時<br>單選模式、綁定value時<br/>單選模式、綁定label時 | index<br/>value<br/>label | | |
| v-model | 多選模式、綁定index時<br>多選模式、綁定value時<br/>多選模式、綁定label時  | [index]<br/>[value]<br/>[label] | | |
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
