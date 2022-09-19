module.exports = {
  show: ['prop'],
  prop: `
## 屬性
| 屬性 | 說明 | 類型 | 可選值 | 默認值 |
| - | - | - |- | -  |
| active | 當前路由，格式範例 "2-1"，即對應menu第二項的第一個children | String | | |
| activePath | 當前路由，格式範例 "/gt/menu"，即對應menu中相同path | String | | |
| menu | Vue Router 路由樹狀物件。 | Array[MenuItem] <br> MenuItem : {label:String,path?:String,children?:{label:String,icon?:IconType(String) <br> ,iconClasses?:String,path:String},icon?:IconType(String),iconClasses?:String} | | |
| collapsed | 收開狀態。可綁ref後訪問，如instance.refs.menuRef.collapsed來變更狀態 | Boolean | | false |
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
|  |  | 

`,
};
