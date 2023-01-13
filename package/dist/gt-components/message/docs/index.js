module.exports = {
  show: ['method'],
  prop: `
## 屬性
| 屬性 | 說明 | 類型 | 可選值 | 默認值 |
| - | - | - |- | -  |
| | | | | |


`,
  method: `
## 方法
| 方法 | 說明 | 參數 |
| - | - | - |
| handleMessageTrigger | 呼叫通知 | { msg:String , type:'info'(default)、'warning'、'error'  } , title:String } |

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
