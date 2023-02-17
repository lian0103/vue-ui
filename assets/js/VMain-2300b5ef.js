import{b as j}from"./vue-router-0064d98b.js";import{g as h,S as R}from"./gsap-46fd0692.js";import{p as S}from"../index.a304da3b.js";import{g as $,X as b,r as s,o as I,w as C,aH as c,az as N,Y as z,b1 as g,F as P,u as G,a6 as p,$ as r,a5 as T}from"./@vue-2b1be6ab.js";import"./@kangc-9e0fb04b.js";import"./@babel-4f0c74a6.js";import"./vue-3a8bbfc9.js";import"./@vuepress-8d06ecb2.js";import"./prismjs-1304d3f8.js";import"./@vueuse-fb22df02.js";import"./uuid-f0c3b5c2.js";import"./dayjs-5152b52f.js";import"./echarts-766ec335.js";const B="./gt-components/barGraph/index.js",U="./gt-components/lineGraph/index.js",A="./gt-components/pieGraph/index.js";var F={barGraph:B,lineGraph:U,pieGraph:A};const H={class:"flex justify-end items-center pr-12"},J=r("span",null,"\u7248\u672C: v1.4.0",-1),W={class:"ml-2 flex"},X={class:"ml-2 flex"},Y=r("a",{href:"https://github.com/lian0103/vue-ui/issues",target:"_blank"},"\u56DE\u5831issue",-1),ie={__name:"VMain",setup(Z){h.registerPlugin(R);const v=$(),o=j(),k=b(()=>{var a;let e=o.currentRoute.value.meta.title,t=((a=o.currentRoute.value.params)==null?void 0:a.componentName)||null;return t?`GT\u5143\u4EF6-${t}`:e}),x=s(null),u=s(!1),l=s(localStorage.getItem("app-menu-onlyOneLevel")==="true"),m=s(localStorage.getItem("app-menu")==="true"),w=["timelineitem","collapse-card-section","filter-chips-group","option","table-column","table2"],d=Object.keys(S).filter(e=>!w.includes(e)),L=Object.keys(F),_=s(o.currentRoute.value.path),y=[{label:"\u6307\u5F15",iconClasses:"fas fa-tools",children:[{label:"GT\u5143\u4EF6\u4F7F\u7528",iconClasses:"far fa-folder-open",path:"/doc"},{label:"Graph\u4F7F\u7528",iconClasses:"far fa-folder-open",path:"/graph"}]},{label:"\u6A23\u5F0F",iconClasses:"far fa-file-code",path:"/style"},{label:"\u5716\u8868",iconClasses:"fas fa-chart-pie",children:[...L.map(e=>({label:e,iconClasses:"far fa-sticky-note",path:`/chart/${e}`}))]},{label:"GT\u5143\u4EF6a-i",iconClasses:"far fa-list-alt",children:[...d.filter(e=>/^[a-iA-I].*$/.test(e)).map(e=>({label:e,iconClasses:"far fa-sticky-note",path:`/gt/a-i/${e}`}))]},{label:"GT\u5143\u4EF6j-r",iconClasses:"far fa-list-alt",children:[...d.filter(e=>/^[j-rJ-R].*$/.test(e)).map(e=>({label:e,iconClasses:"far fa-sticky-note",path:`/gt/j-r/${e}`}))]},{label:"GT\u5143\u4EF6s-z",iconClasses:"far fa-list-alt",children:[...d.filter(e=>/^[s-zS-Z].*$/.test(e)).map(e=>({label:e,iconClasses:"far fa-sticky-note",path:`/gt/s-z/${e}`}))]}],V=b({get(){var e,t;return((t=(e=y.filter(a=>{var n,i;return a.label===((i=(n=o.currentRoute.value)==null?void 0:n.meta)==null?void 0:i.title)})[0])==null?void 0:e.children)==null?void 0:t.map(a=>({...a,name:a.label})))||[]}}),M=e=>{v.refs.appMenu.collapsed=e,m.value=e,localStorage.setItem("app-menu",e)};return I(()=>{h.timeline({defaults:{duration:1}}).from(".gt-e-menu",{x:"-50%",ease:"power1.in"}).from(".gt-header",{y:"-100%"}).fromTo(".gt-content-wrapper",{opacity:0},{opacity:1})}),C(()=>o.currentRoute.value.path,e=>{_.value=e;const t=h.timeline({defaults:{duration:.5}});l.value?t.to(".gt-content ",{opacity:0}).fromTo(".gt-content",{opacity:0},{opacity:1,ease:"power1.in"}).to(".gt-content",{scrollTo:{y:0}}):t.to(".gt-content ",{opacity:0}).fromTo(".gt-content",{opacity:0},{opacity:1,ease:"power1.in"}).to(".gt-content",{scrollTo:{y:0}})}),C(()=>l.value,e=>{localStorage.setItem("app-menu-onlyOneLevel",e),v.refs.appMenu.onlyOneLevel=e}),(e,t)=>{const a=c("g-menu"),n=c("g-switch"),i=c("router-view"),O=c("g-layout");return N(),z(O,{class:P(["doc-layout",u.value?"redLine":""]),headText:"Great Tree UI",title:G(k),collapsed:m.value,onCollapsed:M,menuTabs:G(V),onlyOneLevel:l.value},{sidebar:g(()=>[p(a,{ref_key:"appMenu",ref:x,class:"gt-e-menu",activePath:_.value,menu:y,collapsed:m.value,onlyOneLevel:l.value},null,8,["activePath","collapsed","onlyOneLevel"])]),header:g(()=>[r("div",H,[J,r("span",W,[T("\u5C0D\u9F4A\u7DDA"),p(n,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=f=>u.value=f),class:"ml-2"},null,8,["modelValue"])]),r("span",X,[T("\u9078\u55AEtabs\u6A21\u5F0F"),p(n,{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=f=>l.value=f),class:"ml-2"},null,8,["modelValue"])]),Y])]),content:g(()=>[p(i,{name:"mainView"})]),_:1},8,["class","title","collapsed","menuTabs","onlyOneLevel"])}}};export{ie as default};
