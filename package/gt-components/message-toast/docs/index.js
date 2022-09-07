module.exports = {
  show: ['prop','method'],
  prop: `
## 屬性
| 屬性 | 說明 | 類型 | 可選值 | 默認值 |
| - | - | - |- | -  |
| text | 通知文字 | String | | 儲存成功! |


`,
  method: `
## 方法
| 方法 | 說明 | 參數 |
| - | - | - |
| handleMessageToastTrigger | 呼叫通知 | time:Number (default 1200) 毫秒 |

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
