import{G as p}from"./GTitle.fc3e8c5b.js";import{_ as u,l as h,c as _,a as t,b as a,w as m,d as o,o as $}from"./index.395364d3.js";const F={class:"pb-8 flex justify-center items-center flex-col"},v={class:"paragraphHead"},f=o("\u4F7F\u7528\u5230GT\u5143\u4EF6"),E={class:"mb-8 w-full md:w-3/4 mx-auto"},y={class:"paragraphHead"},b=o("\u4F7F\u7528ElementPlus\u6216Quasar\u7684\u8986\u5BEB\u6A23\u5F0F"),w={class:"mb-8 w-full md:w-3/4 mx-auto"},x=o(" ("),k=t("a",{class:"text-second",href:"https://unpkg.com/browse/gt-front-ui@0.0.20/dist/"},"\u539F\u5247\u4E0A\u9078\u64C7\u6700\u65B0\u7248\u672C\u865F",-1),A=o(") "),B=o(" *\u5C08\u6848\u4F7F\u7528elementPlus\u9700\u8981\u518D\u8986\u5BEB\u57FA\u790E\u7684\u8B8A\u6578\u5B9A\u7FA9 //\u5F85\u88DC\u5145"),V=t("br",null,null,-1),C=o(" \u56E0\u8A72UI\u5EAB\u6703\u4F9D\u7167\u57FA\u790E\u5B9A\u7FA9\u7684\u8B8A\u6578\u518D\u7522\u751F\u5404\u5143\u4EF6\u7684css\u8B8A\u6578\u4F86\u4F7F\u7528\uFF0C\u6240\u4EE5\u4F9D\u7167\u5B98\u7DB2\u7684\u5EFA\u8B70\u65B9\u5F0F\u8ABF\u6574\u6703\u6BD4\u8F03\u5B8C\u6574\u8986\u84CB\u5230\u5404\u5143\u4EF6\u7684\u4F7F\u7528\u3002 "),D=t("br",null,null,-1),T=t("a",{class:"text-second",href:"https://element-plus.org/zh-CN/guide/theming.html#%E5%A6%82%E4%BD%95%E8%A6%86%E7%9B%96%E5%AE%83%EF%BC%9F"},"element-plus. doc",-1),U=o(" *\u5C08\u6848\u4F7F\u7528Quasar\u9700\u8981\u518D\u8986\u5BEB\u57FA\u790E\u7684\u8B8A\u6578\u5B9A\u7FA9 //\u5F85\u88DC\u5145"),I=t("br",null,null,-1),Q=o(" \u56E0\u8A72UI\u5EAB\u6703\u4F9D\u7167\u57FA\u790E\u5B9A\u7FA9\u7684\u8B8A\u6578\u518D\u7522\u751F\u5404\u5143\u4EF6\u7684css\u8B8A\u6578\u4F86\u4F7F\u7528\uFF0C\u6240\u4EE5\u4F9D\u7167\u5B98\u7DB2\u7684\u5EFA\u8B70\u65B9\u5F0F\u8ABF\u6574\u6703\u6BD4\u8F03\u5B8C\u6574\u8986\u84CB\u5230\u5404\u5143\u4EF6\u7684\u4F7F\u7528\u3002 "),G=t("br",null,null,-1),q=t("a",{class:"text-second",href:"https://quasar.dev/start/vite-plugin"},"quasar. doc",-1),N={setup(H){const l="``` bash \n  npm install gt-front-ui@0.0.20 \n ```",r='\n``` html\n  //index.html\n  <!-- \u8F09\u5165css\u65B9\u5F0F\u4E00 -->\n  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.20/dist/GT/style.css"/>\n```\n\n``` css\n  //style.css\n  @import "https://unpkg.com/gt-front-ui@0.0.20/dist/GT/style.css"\n```\n\n',i=`

\`\`\` html
  //index.html
  <!-- Element -->
  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.20/dist/Element/style.css"/>
  <!-- Quasar -->
  <link rel="stylesheet" href="https://unpkg.com/gt-front-ui@0.0.20/dist/Quasar/style.css"/>
\`\`\`

\`\`\` css
  //style.css
  //Element
  @import "https://unpkg.com/gt-front-ui@0.0.20/dist/Element/style.css"
  //Quasar
  @import "https://unpkg.com/gt-front-ui@0.0.20/dist/Quasar/style.css"
\`\`\`

`,g=`\`\`\` scss  
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
 \`\`\``,d=`\`\`\` scss  
  // FILE (create it): src/quasar-variables.sass
  $gt-primary: #32A03D;
  $gt-darker: #2B9749;
  $gt-pop-up: #F6E488;
  $gt-soft: #E0F2DE;
  $gt-hover:#EEF5EB;
  $gt-pressing:#DBE9D8;
  $gt-form-hover:#F1F9F3;
  $gt-bg:#FBFBF9;
  $gt-gray:#D9D9D9;
  $gt-gray-variant:#AAAAAA;
  $gt-gray-light:#F0F0F0;
  $gt-gray-dark:#666666;

  // \u5B9A\u7FA9tag\u984F\u8272
  $gt-tag-normal:#4F9FFC;
  $gt-tag-normal-bg:#F6F7F9;

  $gt-tag-danger:#FC806F;
  $gt-tag-danger-bg:#FEF6F6;

  $gt-tag-warning:#FFB526;
  $gt-tag-warning-bg:#FEFAF1;

  $gt-tag-activity:#FF8E26;

  // \u5B9A\u7FA9button\u984F\u8272
  $gt-primary-hover:$gt-darker;

  $gt-positive:#517BBA;
  $gt-positive-hover:#40659F;

  $gt-negative:#FC806F;
  $gt-negative-hover:#EC7869;

  $gt-warning:#FAAF1D;
  $gt-warning-hover:#E19E1B;

  $gt-info:#F0F0F0;
  $gt-info-hover:$gt-gray;

  // \u5B9A\u7FA9\u6587\u5B57\u984F\u8272
  $gt-text-dark:#303236;
  $gt-text-gray:#55585E;

  // \u5B9A\u7FA9\u9670\u5F71
  $gt-shadow: 0 5px 20px 0 rgba(0,0,0,.1);

  $primary   : $gt-primary;  // \u6B63\u5E38
  $positive  : $gt-positive;// \u6210\u529F
  $negative  : $gt-negative;  // \u8CA0\u9762
  $warning   : $gt-warning; // \u8B66\u544A

  $secondary : #26A69A;
  $accent    : #dd4b39;
  $dark      : #1D1D1D;
  $info      : #31CCEC;
 \`\`\``;return(P,s)=>{const c=p,n=h("v-md-editor");return $(),_("div",F,[t("div",v,[a(c,{level:1,class:"mb-4",id:"install"},{default:m(()=>[f]),_:1})]),t("div",E,[t("p",null,[a(n,{modelValue:l,"onUpdate:modelValue":s[0]||(s[0]=e=>l=e),mode:"preview"}),a(n,{modelValue:r,"onUpdate:modelValue":s[1]||(s[1]=e=>r=e),mode:"preview"})])]),t("div",y,[a(c,{level:1,class:"mb-4",id:"install"},{default:m(()=>[b]),_:1})]),t("div",w,[x,k,A,t("p",null,[a(n,{modelValue:i,"onUpdate:modelValue":s[2]||(s[2]=e=>i=e),mode:"preview"})]),t("p",null,[B,V,C,D,T,a(n,{modelValue:g,"onUpdate:modelValue":s[3]||(s[3]=e=>g=e),mode:"preview"})]),t("p",null,[U,I,Q,G,q,a(n,{modelValue:d,"onUpdate:modelValue":s[4]||(s[4]=e=>d=e),mode:"preview"})])])])}}};var L=u(N,[["__file","D:/frontEnd/gt-UI/src/views/VInstall.vue"]]);export{L as default};
