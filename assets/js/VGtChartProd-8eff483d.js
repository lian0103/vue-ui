import{u as w}from"./vue-router-0064d98b.js";import{g as k,a as R}from"./gtDocChart-f0f9dc97.js";import{_ as y}from"../index.a304da3b.js";import{l as V,r as N,aH as d,az as n,_,a6 as i,b1 as B,a5 as C,M as b,Y as v,v as h,X as G,$ as T,u as l,aF as L,Z as x,aJ as S,j as U}from"./@vue-2b1be6ab.js";import"./@kangc-9e0fb04b.js";import"./@babel-4f0c74a6.js";import"./vue-3a8bbfc9.js";import"./@vuepress-8d06ecb2.js";import"./prismjs-1304d3f8.js";import"./@vueuse-fb22df02.js";import"./uuid-f0c3b5c2.js";import"./dayjs-5152b52f.js";import"./echarts-766ec335.js";const $={__name:"demo",setup(g){const s=V({text:"text",subtext:"subtext"}),e=N("vertical"),a=["mon","tue","wed","thu","fri"],o=[{data:[100,200,230,250,50],name:"\u7B2C\u4E00\u5BB6\u5EE0\u5546"},{data:[100,270,20,500,600],name:"\u7B2C\u4E8C\u5BB6\u5EE0\u5546"},{data:[100,200,230,250,50],name:"\u7B2C\u4E09\u5BB6\u5EE0\u5546"},{data:[100,270,20,500,600],name:"\u7B2C\u56DB\u5EE0\u5546"}],r=()=>{e.value==="horizen"?e.value="vertical":e.value="horizen"};return(m,t)=>{const p=d("g-button"),c=d("g-divider"),u=d("g-bar-graph");return n(),_(b,null,[i(p,{onClick:r},{default:B(()=>[C("\u66F4\u63DB\u65B9\u5411")]),_:1}),i(c),i(u,{modelValue:o,"onUpdate:modelValue":t[0]||(t[0]=f=>o=f),title:s,showTip:!0,showLegend:!0,showBackground:!0,direction:e.value,keys:a},null,8,["title","direction"])],64)}}};var z=y($,[["__scopeId","data-v-415105dd"]]);const P={__name:"demo",setup(g){const s=V({text:"text",subtext:"subtext"}),e=["mon","tue","wed","thu","fri"],a=[{data:[100,200,230,250,50],name:"\u7B2C\u4E00\u5BB6\u5EE0\u5546"},{data:[100,270,20,500,600],name:"\u7B2C\u4E8C\u5BB6\u5EE0\u5546"},{data:[100,200,230,250,50],name:"\u7B2C\u4E09\u5BB6\u5EE0\u5546"},{data:[100,270,20,500,600],name:"\u7B2C\u56DB\u5EE0\u5546"}];return(o,r)=>{const m=d("g-line-graph");return n(),v(m,{modelValue:a,"onUpdate:modelValue":r[0]||(r[0]=t=>a=t),title:s,showTip:!0,showLegend:!0,keys:e},null,8,["title"])}}};var j=y(P,[["__scopeId","data-v-3b8ba8ca"]]);const A={__name:"demo",setup(g){const s=[{group:"order",title:"\u8A02\u55AE\u6578\u91CF"},{group:"money",title:"\u7E3D\u984D"}],e=[{value:200,name:"\u5927\u6A39ec\u8A02\u55AE",group:"order",itemStyle:{color:"red"},textStyle:{color:"red",fontSize:"20",formatter:()=>`abcdef
`+456},childrens:[{value:5e3,name:"\u91D1\u984D",group:"money"}]},{value:200,name:"\u8766\u76AE\u8A02\u55AE",group:"order"},{value:800,name:"\u5305\u88F9\u8A02\u55AE",group:"order"},{value:800,name:"\u5929\u8C93\u8A02\u55AE",group:"order"},{value:800,name:"\u5E73\u53F0\u8A02\u55AE",group:"order"}],a={formatter:()=>`\u7E3D\u6578\u91CF
`+5e3};return(o,r)=>{const m=d("g-pie-graph");return n(),v(m,{height:"150px",modelValue:e,"onUpdate:modelValue":r[0]||(r[0]=t=>e=t),totalTitleList:s,totalStyle:a})}}};const D={class:"innerWrapper"},H={class:"w-full py-4 flex justify-center items-center"},I={key:0,class:"mb-3 px-2 pt-6 w-full 2xl:w-3/4"},te={__name:"VGtChartProd",setup(g){const s=w(),e=h(null),a=h(null),o=h(null),r={barGraph:z,lineGraph:j,pieGraph:A},m=G(async()=>{let t=s.params.componentName;return e.value=k[""+t],o.value=R[""+t],a.value=r[t],t});return(t,p)=>{const c=d("v-md-editor");return n(),_("div",D,[T("div",H,[l(m)?(n(),_("div",I,[l(e)?(n(!0),_(b,{key:0},L(l(e).show,u=>(n(),_("div",{class:"mb-4",key:u},[i(c,{modelValue:l(e)[u],"onUpdate:modelValue":f=>l(e)[u]=f,mode:"preview"},null,8,["modelValue","onUpdate:modelValue"])]))),128)):x("",!0),(n(),v(S(l(a)))),l(o)?(n(),v(c,{key:1,modelValue:l(o),"onUpdate:modelValue":p[0]||(p[0]=u=>U(o)?o.value=u:null),mode:"preview"},null,8,["modelValue"])):x("",!0)])):x("",!0)])])}}};export{te as default};
