import{G as p}from"./GTitle.7fbb9e5f.js";import{_,e as h,o as f,c as g,a as s,b as l,w as i,d as o}from"./index.d6cf023a.js";const v={class:"pb-8 flex justify-center items-center flex-col"},b={class:"paragraphHead"},w=o("\u5EFA\u8B70\u4F7F\u7528"),x={class:"mb-8 w-full md:w-3/4 mx-auto"},E=o(" \u4F7F\u7528\u5230GT\u958B\u767C "),V={class:"paragraphHead"},k=o("\u9078\u64C7\u4F7F\u7528"),y={class:"mb-8 w-full md:w-3/4 mx-auto"},C=o(" \u4F7F\u7528ElementPlus\u8986\u5BEB\u6A23\u5F0F\u6216Quasar\u8986\u5BEB\u6A23\u5F0F ("),T=s("a",{class:"text-second",href:"https://unpkg.com/browse/gt-front-ui@0.0.12/dist/"},"\u539F\u5247\u4E0A\u9078\u64C7\u6700\u65B0\u7248\u672C\u865F",-1),U=o(") "),F=o(" *\u5C08\u6848\u4F7F\u7528elementPlus\u9700\u8981\u518D\u8986\u5BEB\u57FA\u790E\u7684\u8B8A\u6578\u5B9A\u7FA9"),B=s("br",null,null,-1),I=o(" \u56E0\u8A72UI\u5EAB\u6703\u4F9D\u7167\u57FA\u790E\u5B9A\u7FA9\u7684\u8B8A\u6578\u518D\u7522\u751F\u5404\u5143\u4EF6\u7684css\u8B8A\u6578\u4F86\u4F7F\u7528\uFF0C\u6240\u4EE5\u4F9D\u7167\u5B98\u7DB2\u7684\u5EFA\u8B70\u65B9\u5F0F\u8ABF\u6574\u6703\u6BD4\u8F03\u5B8C\u6574\u8986\u84CB\u5230\u5404\u5143\u4EF6\u7684\u4F7F\u7528\u3002 "),Q=s("br",null,null,-1),j=s("a",{class:"text-second",href:"https://element-plus.org/zh-CN/guide/theming.html#%E5%A6%82%E4%BD%95%E8%A6%86%E7%9B%96%E5%AE%83%EF%BC%9F"},"element-plus. doc",-1),G=o(" *\u5C08\u6848\u4F7F\u7528Quasar\u9700\u8981\u518D\u8986\u5BEB\u57FA\u790E\u7684\u8B8A\u6578\u5B9A\u7FA9"),q=s("br",null,null,-1),N=o(" \u56E0\u8A72UI\u5EAB\u6703\u4F9D\u7167\u57FA\u790E\u5B9A\u7FA9\u7684\u8B8A\u6578\u518D\u7522\u751F\u5404\u5143\u4EF6\u7684css\u8B8A\u6578\u4F86\u4F7F\u7528\uFF0C\u6240\u4EE5\u4F9D\u7167\u5B98\u7DB2\u7684\u5EFA\u8B70\u65B9\u5F0F\u8ABF\u6574\u6703\u6BD4\u8F03\u5B8C\u6574\u8986\u84CB\u5230\u5404\u5143\u4EF6\u7684\u4F7F\u7528\u3002 "),A=s("br",null,null,-1),$=s("a",{class:"text-second",href:"https://quasar.dev/start/vite-plugin"},"quasar. doc",-1),D={setup(H){const d="``` bash \n  npm install gt-front-ui@0.0.12 \n ```",r=`
\`\`\` html
  <!-- index.html -->
  <!-- \u8F09\u5165css\u65B9\u5F0F\u4E00 -->
  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.12/dist/GT/style.css"/>
\`\`\`

\`\`\` js
  // main.js
  //\u8F09\u5165css\u65B9\u5F0F\u4E8C
  import "https://unpkg.com/gt-front-ui@0.0.12/dist/GT/style.css"
\`\`\`

`,c=`

\`\`\` html
  <!-- index.html -->
  <!-- \u8F09\u5165css\u65B9\u5F0F\u4E00:Element -->
  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.12/dist/Element/style.css"/>
  <!-- \u8F09\u5165css\u65B9\u5F0F\u4E00:Quasar -->
  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.12/dist/Quasar/style.css"/>
\`\`\`

\`\`\` js
  // main.js
  //\u8F09\u5165css\u65B9\u5F0F\u4E8C:Element
  import "https://unpkg.com/gt-front-ui@0.0.12/dist/Element/style.css"
  //\u8F09\u5165css\u65B9\u5F0F\u4E8C:Quasar
  import "https://unpkg.com/gt-front-ui@0.0.12/dist/Quasar/style.css"
\`\`\`

`,m=`\`\`\` scss  
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
 \`\`\``,u="``` scss  \n  // FILE (create it): src/quasar-variables.sass\n  $primary   : #3bb071\n  $warning : #FC806F\n ```";return(P,t)=>{const a=p,n=h("v-md-editor");return f(),g("div",v,[s("div",b,[l(a,{level:1,class:"mb-4",id:"install"},{default:i(()=>[w]),_:1})]),s("div",x,[l(a,{level:2,class:"mb-4",id:"install"},{default:i(()=>[E]),_:1}),s("p",null,[l(n,{modelValue:d,"onUpdate:modelValue":t[0]||(t[0]=e=>d=e),mode:"preview"}),l(n,{modelValue:r,"onUpdate:modelValue":t[1]||(t[1]=e=>r=e),mode:"preview"})])]),s("div",V,[l(a,{level:1,class:"mb-4",id:"install"},{default:i(()=>[k]),_:1})]),s("div",y,[l(a,{level:2,class:"mb-4",id:"install"},{default:i(()=>[C,T,U]),_:1}),s("p",null,[l(n,{modelValue:c,"onUpdate:modelValue":t[2]||(t[2]=e=>c=e),mode:"preview"})]),s("p",null,[F,B,I,Q,j,l(n,{modelValue:m,"onUpdate:modelValue":t[3]||(t[3]=e=>m=e),mode:"preview"})]),s("p",null,[G,q,N,A,$,l(n,{modelValue:u,"onUpdate:modelValue":t[4]||(t[4]=e=>u=e),mode:"preview"})])])])}}};var J=_(D,[["__file","D:/frontEnd/gt-UI/src/views/VInstall.vue"]]);export{J as default};
