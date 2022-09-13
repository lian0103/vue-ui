module.exports = {
  show: ['prop','method','slot'],
  prop: `
## 屬性
| 屬性 | 說明 | 類型 | 可選值 | 默認值 |
| - | - | - |- | -  |
| name | 表名稱。 | String |  |  |
| columns | 欄位 | Array[ColumnObject{Column(String),label(String),width(Number),sort(Boolean)}] |  |  |
| data | 資料 | Array[RowObject{ Column:DataCell(Any) }] |  |  |
| isCheckBox | 顯示勾選欄 | Boolean |  | true |
| height | 表高度。超過高度則有Y捲軸 | Number |  |  |
| rowClick | 點選row即可勾選 | Boolean |  | false |
| isLoading | 顯示載入效果 | Boolean |  | false |
`,
  method: `
## 方法
| 方法 | 說明 | 參數 |
| - | - | - |
| getCheckedList | 呼叫勾選清單。使用table的名稱註冊於全局屬性中。例如name是product，globalProperties['gt-table-product']會有此方法<br>或以instance.refs方式使用 | |
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
| v-slot:**Column**="{ row }" | 使用Column作為插槽名稱，row即為該筆資料的Object| 

`,
};
