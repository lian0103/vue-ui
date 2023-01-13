module.exports = {
  show: ['prop'],
  prop: `
## 屬性
| 屬性 | 說明 | 類型 | 可選值 | 默認值 |
| - | - | - |- | -  |
| v-model | 顯示 | Boolean | | false |
| title | 標題 | String | | |
| mode | 對話窗模式 | String | comfirm、delete | comfirm |
| size | 對話窗尺寸 | String | sm、md、lg | sm |
| align | 對齊位置 | String | left、center、right | left |
| handleCallback | 自訂確認動作後回call事件 | Function | | ()=>{} |
| width | 自定義對話窗寬度 | Number |  |  |
| height | 自定義對話窗高度 | Number |  |  |

`,
  method: `
## 方法
| 方法 | 說明 | 參數 |
| - | - | - |
| | |  |

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
