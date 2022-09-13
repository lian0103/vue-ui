module.exports = {
  show: ['prop','method'],
  prop: `
## 屬性
| 屬性 | 說明 | 類型 | 可選值 | 默認值 |
| - | - | - |- | -  |
| name | 表單名稱 | String |  |  |
| v-model | 表單數據 | Object{ItemName:ItemValue} |  |  |
| rules | 驗證規則 | Object{ItemName:Rules(Array)} |  |  |
|  |  | Rules(Array):[{require?:Boolean,message:String,trigger?:EventType(String)}] |  |  |
|  |  | EventType(String):'blur' |  |  |
`,
  method: `
## 方法
| 方法 | 說明 | 參數 |
| - | - | - |
callValid | 使用form的名稱註冊於全局屬性中。例如name是form1，globalProperties['gForms-form1']會有此方法<br>或以instance.refs方式使用| |

`,
  event: `
## 事件
| 事件 | 說明 | 參數 |
| - | - | - |
|  |  |  |
`,
  slot: `
## 插槽
| 插槽 | 說明 | 
| - | - | 
| | | 

`,
};
