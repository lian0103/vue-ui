module.exports = {
  show: ['prop','method'],
  prop: `
## 屬性
| 屬性 | 說明 | 類型 | 可選值 | 默認值 |
| - | - | - |- | -  |
| type | 類型 | InputType(String) | text、number、password | text |
| v-model | 狀態值 | any |  |  |
| placeholder | 預設提示字 | String |  |  |
| label | 標題 | String | | |
| width | 寬度 | Number | | |
| size | 大小(高度) | SizeType(String) | sm、md | sm |
| green | 大樹綠 | Boolean | | false |
| icon | 圖示 | IconType(String) | 參考圖示頁 | |
| disabled | 禁用 | Boolean | | false |

`,
  method: `
## 方法
| 方法 | 說明 | 參數 |
| - | - | - |
| focusInput | 使input進入focus狀態。透過ref綁定後使用該方法，如instance.refs.inputA.focusInput() |  

`,
  event: `
## 事件
| 事件 | 說明 | 參數 |
| - | - | - |
| blur | 觸發blur事件後回傳 |
| focus | 觸發focus事件後回傳 | 

`,
  slot: `
## 插槽
| 插槽 | 說明 | 
| - | - | 
| | | 

`,
};
