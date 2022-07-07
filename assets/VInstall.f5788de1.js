import{G as p}from"./GTitle.77670402.js";import{_,l as h,c as f,a as s,b as o,w as u,d as l,o as g}from"./index.7a1fa362.js";const v={class:"pb-8 flex justify-center items-center flex-col"},b={class:"paragraphHead"},w=l("\u4F7F\u7528\u5230GT\u5143\u4EF6"),x={class:"mb-8 w-full md:w-3/4 mx-auto"},E={class:"paragraphHead"},V=l("\u4F7F\u7528ElementPlus\u6216Quasar\u7684\u8986\u5BEB\u6A23\u5F0F"),y={class:"mb-8 w-full md:w-3/4 mx-auto"},k=l(" ("),C=s("a",{class:"text-second",href:"https://unpkg.com/browse/gt-front-ui@0.0.17/dist/"},"\u539F\u5247\u4E0A\u9078\u64C7\u6700\u65B0\u7248\u672C\u865F",-1),T=l(") "),U=l(" *\u5C08\u6848\u4F7F\u7528elementPlus\u9700\u8981\u518D\u8986\u5BEB\u57FA\u790E\u7684\u8B8A\u6578\u5B9A\u7FA9 //\u5F85\u88DC\u5145"),F=s("br",null,null,-1),B=l(" \u56E0\u8A72UI\u5EAB\u6703\u4F9D\u7167\u57FA\u790E\u5B9A\u7FA9\u7684\u8B8A\u6578\u518D\u7522\u751F\u5404\u5143\u4EF6\u7684css\u8B8A\u6578\u4F86\u4F7F\u7528\uFF0C\u6240\u4EE5\u4F9D\u7167\u5B98\u7DB2\u7684\u5EFA\u8B70\u65B9\u5F0F\u8ABF\u6574\u6703\u6BD4\u8F03\u5B8C\u6574\u8986\u84CB\u5230\u5404\u5143\u4EF6\u7684\u4F7F\u7528\u3002 "),I=s("br",null,null,-1),Q=s("a",{class:"text-second",href:"https://element-plus.org/zh-CN/guide/theming.html#%E5%A6%82%E4%BD%95%E8%A6%86%E7%9B%96%E5%AE%83%EF%BC%9F"},"element-plus. doc",-1),G=l(" *\u5C08\u6848\u4F7F\u7528Quasar\u9700\u8981\u518D\u8986\u5BEB\u57FA\u790E\u7684\u8B8A\u6578\u5B9A\u7FA9 //\u5F85\u88DC\u5145"),q=s("br",null,null,-1),N=l(" \u56E0\u8A72UI\u5EAB\u6703\u4F9D\u7167\u57FA\u790E\u5B9A\u7FA9\u7684\u8B8A\u6578\u518D\u7522\u751F\u5404\u5143\u4EF6\u7684css\u8B8A\u6578\u4F86\u4F7F\u7528\uFF0C\u6240\u4EE5\u4F9D\u7167\u5B98\u7DB2\u7684\u5EFA\u8B70\u65B9\u5F0F\u8ABF\u6574\u6703\u6BD4\u8F03\u5B8C\u6574\u8986\u84CB\u5230\u5404\u5143\u4EF6\u7684\u4F7F\u7528\u3002 "),A=s("br",null,null,-1),$=s("a",{class:"text-second",href:"https://quasar.dev/start/vite-plugin"},"quasar. doc",-1),D={setup(H){const a="``` bash \n  npm install gt-front-ui@0.0.17 \n ```",i='\n``` html\n  //index.html\n  <!-- \u8F09\u5165css\u65B9\u5F0F\u4E00 -->\n  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.17/dist/GT/style.css"/>\n```\n\n``` css\n  //style.css\n  @import "https://unpkg.com/gt-front-ui@0.0.17/dist/GT/style.css"\n```\n\n',r=`

\`\`\` html
  //index.html
  <!-- Element -->
  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.17/dist/Element/style.css"/>
  <!-- Quasar -->
  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.17/dist/Quasar/style.css"/>
\`\`\`

\`\`\` css
  //style.css
  //Element
  @import "https://unpkg.com/gt-front-ui@0.0.17/dist/Element/style.css"
  //Quasar
  @import "https://unpkg.com/gt-front-ui@0.0.17/dist/Quasar/style.css"
\`\`\`

`,d=`\`\`\` scss  
  @forward 'element-plus/theme-chalk/src/common/var.scss' with ( 
        $colors: (
        'primary': (
            'base': #3bb071
        ),
        'danger':(
            'base': #FC806F
        )
    )
  );    
 \`\`\``,c="``` scss  \n  // FILE (create it): src/quasar-variables.sass\n  $primary   : #3bb071\n  $warning : #FC806F\n ```";return(P,t)=>{const m=p,n=h("v-md-editor");return g(),f("div",v,[s("div",b,[o(m,{level:1,class:"mb-4",id:"install"},{default:u(()=>[w]),_:1})]),s("div",x,[s("p",null,[o(n,{modelValue:a,"onUpdate:modelValue":t[0]||(t[0]=e=>a=e),mode:"preview"}),o(n,{modelValue:i,"onUpdate:modelValue":t[1]||(t[1]=e=>i=e),mode:"preview"})])]),s("div",E,[o(m,{level:1,class:"mb-4",id:"install"},{default:u(()=>[V]),_:1})]),s("div",y,[k,C,T,s("p",null,[o(n,{modelValue:r,"onUpdate:modelValue":t[2]||(t[2]=e=>r=e),mode:"preview"})]),s("p",null,[U,F,B,I,Q,o(n,{modelValue:d,"onUpdate:modelValue":t[3]||(t[3]=e=>d=e),mode:"preview"})]),s("p",null,[G,q,N,A,$,o(n,{modelValue:c,"onUpdate:modelValue":t[4]||(t[4]=e=>c=e),mode:"preview"})])])])}}};var L=_(D,[["__file","D:/frontEnd/gt-UI/src/views/VInstall.vue"]]);export{L as default};
