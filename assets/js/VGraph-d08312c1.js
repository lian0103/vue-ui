import{aH as s,az as m,_ as i,$ as t,a6 as n,b1 as c,a5 as l}from"./@vue-2b1be6ab.js";const _={class:"pb-8 flex justify-center items-center flex-col"},d={class:"paragraphHead",id:"dev"},g=t("div",{class:"mb-8 w-full md:w-3/4 mx-auto"},[t("p",null,"- Vue3\u5C08\u6848")],-1),u={class:"mb-8 w-full md:w-3/4 mx-auto"},x={__name:"VGraph",setup(h){const e=`
# @greattree/front-ui-chart

## \u5143\u4EF6\u5EAB\u5B89\u88DD
**npm install @greattree/front-ui --registry=https://npmrg.greattree.com.tw/repository/npm-gt/**
\u5B89\u88DD\u6642\u8981\u6307\u5B9A\u79C1\u6709\u5009\u5EAB\u5730\u5740\uFF0C\u516C\u53F8\u5916\u7DB2\u61C9\u53EF\u80FD\u7121\u6CD5\u4F7F\u7528\u3002

## \u4F7F\u7528GT Graph

\u5168\u57DF\u5B89\u88DD
\`\`\`javascript
// main.js
// \u8F09\u5165UI\u7684\u6A23\u5F0F\u6A94\u548C\u6A21\u7D44
import '@greattree/front-ui/dist/assets/css/index.scss';

import GtUIChart from '@greattree/front-ui-chart';
// or
import GtUIChart from '@greattree/front-ui-chart/dist/gt-ui-chart.es.min.js';

// \u900F\u904Euse\u65B9\u6CD5\u6703\u89F8\u767CGtUI install
app.use(GtUIChart).mount('#app');
\`\`\`

## \u958B\u767C\u5C08\u6848\u914D\u7F6E
\u6240\u6709\u5143\u4EF6\u4F4D\u65BC package-chart\u7D50\u69CB\u4E0B\u3002
package-chart
|    
|__ scripts \u5305\u542B\u5C08\u6848\u4F7F\u7528\u5230\u7684npm\u3001sh\u8173\u672C
|     
|__ assets \u5143\u4EF6\u5305\u5167\u7684\u975C\u614B\u8CC7\u6E90(font svg scss) 
|     
|__ components \u5143\u4EF6\u5305\u5167\u4F7F\u7528\u7684\u5143\u4EF6\uFF0C\u4F46\u6C92\u6709\u5217\u5728\u767C\u4F48\u7684\u5143\u4EF6\u6E05\u55AE\u5167
|     
|__ gt-components \u6240\u6709@greattree/front-ui\u767C\u4F48\u7684\u5143\u4EF6\uFF0C\u6BCF\u500B\u5143\u4EF6\u518D\u5404\u81EA\u6709\u7368\u7ACB\u7684demo\u3001src\u593E
|      
|__ components.json \u900F\u904E**npm run gen:component**\u65B0\u589E\u5143\u4EF6\u5F8C\u7684\u5143\u4EF6\u6E05\u55AE
|      
|__ dist \u900F\u904E**npm run build**\u7522\u751F\u7684\u7D50\u679C
|      
|__ index.js \u900F\u904E**npm run gen** \u3001 **npm run build**\u7522\u751F
    
## \u6307\u5B9A\u79C1\u6709\u5EAB
- \u4F7F\u7528 **.npmrc** \u8A2D\u5B9A\u6A94
\`\`\`npmrc
# .npmrc

# \u6307\u5B9A@greattree/front-ui-chart\u7684\u5009\u5EAB\u5730\u5740
@greattree:registry=https://npmrg.greattree.com.tw/repository/npm-gt/

# \u4F7F\u7528npm\u5B89\u88DD\u5957\u4EF6\u6642 \u6703\u512A\u5148\u6307\u5411\u9019\u500B\u79C1\u6709\u5009\u5EAB \u5982\u679C\u6C92\u6709\u624D\u6703\u518D\u53BB\u516C\u958B\u5EAB\u67E5\u627E
registry=https://npmrg.greattree.com.tw/repository/npm-gt/

\`\`\`

## \u6253\u5305
- **npm run build**

## \u6253\u5305\u767C\u4F48

-- **npm login --registry=https://npmrg.greattree.com.tw/repository/npm-gt/**
\u767B\u5165\u79C1\u6709\u5EAB\u7A7A\u9593

-- **npm publish**
\u7559\u610F\u7248\u865F\u898F\u5247

> 2022.10.06 \u66F4\u65B0

`;return(f,r)=>{const o=s("g-title"),a=s("v-md-editor");return m(),i("div",_,[t("div",d,[n(o,{level:1,class:"mb-4"},{default:c(()=>[l("\u652F\u63F4")]),_:1})]),g,t("div",u,[n(a,{modelValue:e,"onUpdate:modelValue":r[0]||(r[0]=p=>e=p),mode:"preview"})])])}}};export{x as default};
