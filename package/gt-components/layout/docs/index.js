module.exports = {
  show: ['prop','slot'],
  prop: `
## 屬性
| 屬性 | 說明 | 類型 | 可選值 | 默認值 |
| - | - | - |- | -  |
| headText | 左上標題 | String | | |
| title | 頁面標題 | String | | |
| menuTabs | 選單頁籤 | Array[Item{name(String),path(String)}] | | |
| collapsed | sidebar區塊收開狀態。收:寬80px，開:寬300px。 | Boolean | | false |
| onlyOneLevel | menu只有一層的模式 | Boolean | | false |

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
| header | 以flex justify-between排版，插槽內容向右對齊 | 
| content | 主內容區塊 | 

`,
};
