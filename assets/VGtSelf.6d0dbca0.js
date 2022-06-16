var st=Object.defineProperty,ot=Object.defineProperties;var nt=Object.getOwnPropertyDescriptors;var Ke=Object.getOwnPropertySymbols;var dt=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable;var Xe=(n,g,m)=>g in n?st(n,g,{enumerable:!0,configurable:!0,writable:!0,value:m}):n[g]=m,ee=(n,g)=>{for(var m in g||(g={}))dt.call(g,m)&&Xe(n,m,g[m]);if(Ke)for(var m of Ke(g))it.call(g,m)&&Xe(n,m,g[m]);return n},te=(n,g)=>ot(n,nt(g));import{_ as B,a1 as ie,q as I,o as i,c as b,l as v,a as s,v as ne,k as M,F as z,B as se,n as R,t as E,d as u,f as e,C as ce,D as ge,b as t,A as Q,g as me,E as de,e as w,a0 as X,az as ut,aA as tt,x as he,r as ve,w as c,av as rt,aB as ct,i as mt}from"./index.3425bab4.js";import{v as le,G as pt,a as ft}from"./GMenu.e5eaf534.js";import{G as A,a as L}from"./GButton.9baf52c0.js";import{G as _}from"./GTitle.ce67d43a.js";const gt={key:0,class:"gt-loading-wrapper"},vt=s("div",{class:"gt-loadBox relative"},[s("div",{class:"gt-loadAni"}),s("div",{class:"gt-loadText"},"\u8F09\u5165\u4E2D")],-1),bt=[vt],ht={setup(n){const g=ie(),m=I(!1);return g.appContext.config.globalProperties.handleLoadingTrigger=({time:r=3e3}={})=>{r=typeof parseInt(r)=="number"?parseInt(r):3e3,m.value=!0,setTimeout(()=>{m.value=!1},r)},(r,p)=>m.value?(i(),b("div",gt,bt)):v("v-if",!0)}};var _t=B(ht,[["__file","D:/frontEnd/gt-UI/src/components/GLoading.vue"]]);const wt={key:0,class:"gt-msgBox"},xt={class:"relative"},Vt={key:0,class:"title"},yt={setup(n){const g=ie(),m=ne({arr:[]}),r=I(!1),p=["info","warning","error"],f=M(()=>m.arr);return g.appContext.config.globalProperties.handleMessageTrigger=({msg:x,type:y="info",title:T=""}={})=>{r.value=!1,m.arr=m.arr.filter(o=>o.show);let C={id:le(),msgType:p.includes(y)?y:p[0],classArr:["gt-msg",p.includes(y)?y:p[0],"aniIn"],msgTitle:T,msgText:x||le(),show:!0};m.arr=[...m.arr,C],setTimeout(()=>{m.arr=m.arr.map(o=>o.id==C.id?te(ee({},o),{classArr:o.classArr.map(V=>V=="aniIn"?"aniOut":V),aniEndStart:new Date().getTime(),show:!1}):o),m.arr.filter(o=>o.show).length==0&&setTimeout(()=>{new Date().getTime()-m.arr[m.arr.length-1].aniEndStart>1500&&(r.value=!0)},1500)},2e3+m.arr.length*500)},(x,y)=>r.value?v("v-if",!0):(i(),b("div",wt,[s("div",xt,[(i(!0),b(z,null,se(e(f),T=>(i(),b("div",{key:T.id,class:R(T.classArr)},[T.msgTitle?(i(),b("div",Vt,E(T.msgTitle),1)):v("v-if",!0),u(" "+E(T.msgText),1)],2))),128))])]))}};var kt=B(yt,[["__file","D:/frontEnd/gt-UI/src/components/GMessage.vue"]]);const Tt=["onClick"],Ct=["checked"],Ut={name:"gt-checkbox",inheritAttrs:!1,customOptions:{}},Lt=Object.assign(Ut,{props:{disabled:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1},label:{default:null},value:{default:null},parentValue:{default:null},handleChildClick:{default:null},type:{type:String,default:"GREEN"}},emits:["update:modelValue"],setup(n,{emit:g}){const{disabled:m,modelValue:r,label:p,value:f,parentValue:x,handleChildClick:y,type:T}=n,C={GREEN:"box-green",WHITE:"box-white"},o=x?M(()=>{var k;return(k=x==null?void 0:x.value)==null?void 0:k.includes(f)}):I(r),V=M(()=>{let k=["checkmark",C[T.toUpperCase()]?C[T.toUpperCase()]:C.GREEN];return o.value&&k.push("checked"),m&&k.push("disabled"),k}),h=()=>{if(!m&&y&&y(f),!m&&!y){let k=!o.value;o.value=k,g("update:modelValue",k)}};return(k,O)=>(i(),b("div",{class:"gt-checkbox",onClick:Q(h,["prevent"])},[s("input",{type:"checkbox",checked:e(o)},null,8,Ct),s("div",{class:R(e(V))},[ce(t(A,{class:"icon",name:"check",size:"sm"},null,512),[[ge,e(o)]])],2),n.label?(i(),b("span",{key:0,class:R(["label select-none",n.disabled?"label-disabled":""])},E(n.label),3)):v("v-if",!0)],8,Tt))}});var ae=B(Lt,[["__file","D:/frontEnd/gt-UI/src/components/GCheckbox.vue"]]);const $t=["onClick"],Dt=["checked"],It={class:"circle"},Gt={name:"gt-radiobox",inheritAttrs:!1,customOptions:{}},Et=Object.assign(Gt,{props:{disabled:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1},label:{default:null},value:{default:null},parentValue:{default:null},handleChildClick:{default:null}},emits:["update:modelValue"],setup(n,{emit:g}){const{disabled:m,modelValue:r,value:p,parentValue:f,handleChildClick:x}=n,y=f?M(()=>p===f.value):I(r),T=()=>{if(!m&&x&&p&&x(p),!m&&!x){let C=!y.value;y.value=C,g("update:modelValue",C)}};return(C,o)=>(i(),b("div",{class:"gt-radiobox",onClick:Q(T,["prevent"])},[s("input",{type:"radio",checked:e(y)},null,8,Dt),s("div",{class:R(["checkmark",(e(y)?"checked":"")+" "+(n.disabled?"disabled":"")])},[ce(s("div",It,null,512),[[ge,e(y)]])],2),n.label?(i(),b("span",{key:0,class:R(["label",n.disabled?"label-disabled":""])},E(n.label),3)):v("v-if",!0)],8,$t))}});var oe=B(Et,[["__file","D:/frontEnd/gt-UI/src/components/GRadiobox.vue"]]);const At=["onClick"],St={class:"relative"},Bt=["checked"],Rt={class:"label-text"},Ot={props:{modelValue:{type:Boolean,default:!1},statusLabel:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(n,{emit:g}){const{modelValue:m,statusLabel:r}=n,p=I(m),f=()=>{let x=!p.value;p.value=x,g("update:modelValue",x)};return(x,y)=>(i(),b("div",{class:"gt-switch-input",onClick:Q(f,["prevent"])},[s("div",St,[s("input",{type:"checkbox",checked:n.modelValue},null,8,Bt),s("div",{class:R(["bar",n.modelValue?"bg-open":"bg-close"])},null,2),s("div",{class:R(["dot",n.modelValue?"checked":""])},null,2)]),s("div",Rt,E(n.statusLabel?n.modelValue?"\u958B\u555F":"\u95DC\u9589":""),1)],8,At))}};var D=B(Ot,[["__file","D:/frontEnd/gt-UI/src/components/GSwitch.vue"]]);const Pt={class:"gt-loading-icon"},jt={setup(n){return(g,m)=>(i(),b("div",Pt,[t(A,{name:"loading",class:"w-full"})]))}};var lt=B(jt,[["__file","D:/frontEnd/gt-UI/src/components/GLoadingIcon.vue"]]);const Nt={class:"gt-upload-icon"},Mt=s("div",{class:"inner"},null,-1),Ft={props:{percent:{type:Number,default:0},auto:{type:Boolean,default:!1}},setup(n){const{percent:g,auto:m}=n,r=I(g),p=M(()=>({background:`conic-gradient(#55585e 0 ${r.value}%, #aaa 0 100%)`}));return me(()=>{m&&setInterval(()=>{r.value=r.value+10,r.value>100&&(r.value=0)},500)}),(f,x)=>(i(),b("div",Nt,[s("div",{class:"pie",style:de(e(p))},null,4),Mt,t(A,{name:"upload",class:"w-full svgbox"})]))}};var re=B(Ft,[["__file","D:/frontEnd/gt-UI/src/components/GUploadIcon.vue"]]);const Ht={class:"gt-download-icon"},zt={props:{percent:{type:Number,default:0},auto:{type:Boolean,default:!1}},setup(n){const{percent:g,auto:m}=n,r=I(g),p=M(()=>({background:`conic-gradient(#55585e 0 ${r.value}%, #aaa 0 100%)`}));return me(()=>{m&&setInterval(()=>{r.value=r.value+10,r.value>100&&(r.value=0)},500)}),(f,x)=>(i(),b("div",Ht,[s("div",{class:"pie",style:de(e(p))},null,4),s("div",{class:R(["inner",r.value>=100?"completed":""])},null,2),r.value<100?(i(),w(A,{key:0,name:"download_sm",class:"w-full svgbox"})):v("v-if",!0),r.value>=100?(i(),w(A,{key:1,name:"check",class:"w-full svgbox completed"})):v("v-if",!0)]))}};var fe=B(zt,[["__file","D:/frontEnd/gt-UI/src/components/GDownloadIcon.vue"]]);const qt={props:["modelValue"],emits:["update:modelValue"],setup(n,{slots:g,emit:m}){const r=g.default()?g.default().filter(p=>p.type.name==="gt-radiobox").map(p=>te(ee({},p),{props:te(ee({},p.props),{parentValue:M(()=>n.modelValue),handleChildClick:f=>m("update:modelValue",f)})})):[];return()=>X("div",r)}};var Wt=B(qt,[["__file","D:/frontEnd/gt-UI/src/components/GRadioboxGroup.vue"]]);const Yt={props:["modelValue"],emits:["update:modelValue"],setup(n,{slots:g,emit:m}){const r=f=>{if(Array.isArray(n.modelValue)){let x=n.modelValue.includes(f)?n.modelValue.filter(y=>y!=f):[...n.modelValue,f];m("update:modelValue",x)}else m("update:modelValue",[f])},p=g.default()?g.default().filter(f=>f.type.name==="gt-checkbox").map(f=>te(ee({},f),{props:te(ee({},f.props),{parentValue:M(()=>n.modelValue),handleChildClick:r})})):[];return()=>X("div",p)}};var Jt=B(Yt,[["__file","D:/frontEnd/gt-UI/src/components/GCheckboxGroup.vue"]]);const Zt={name:"gt-dropdown-item",inheritAttrs:!1,customOptions:{}},Kt=Object.assign(Zt,{props:{option:{default:{}},label:{default:null},value:{default:null},icon:{default:!1},parentValue:{default:null},handleChildClick:{default:()=>{}}},setup(n){const{option:g,label:m,value:r,icon:p,parentValue:f,handleChildClick:x}=n,y=M(()=>f.value===g.value);return(T,C)=>n.label?(i(),b("div",{key:0,class:R(["gt-dropdown-item",e(y)?"current":""]),onClick:C[0]||(C[0]=()=>{n.handleChildClick(n.value||n.label)})},[n.icon?(i(),w(A,{key:0,class:"text-right",name:"file"})):v("v-if",!0),s("span",{class:R(e(y)?"text-main":"")},E(n.label),3)],2)):v("v-if",!0)}});var Xt=B(Kt,[["__file","D:/frontEnd/gt-UI/src/components/GDropdownItem.vue"]]);const Qt={props:{modelValue:{},options:{type:Array},clicked:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},icon:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(n,{slots:g,emit:m}){var O;const r=I(!1),p=I(!1),f=I(!1),x=($=!1)=>{if(n.clicked||$){let N=!r.value;r.value=N,p.value=!1}},y=()=>{n.hover&&(p.value=!0,r.value=!0)},T=()=>{n.hover&&(p.value=!1,r.value=!1)},C=M(()=>n.hover&&p.value?"gt-dropdown gt-dropdown-hover":"gt-dropdown"),o=M(()=>n.clicked&&r.value?"gt-dropdown-items show":"gt-dropdown-items"),V=M(()=>n.options&&n.options.findIndex($=>$.value===n.modelValue)!=-1?n.options.filter($=>$.value===n.modelValue)[0].label:n.modelValue),h=((O=n.options)==null?void 0:O.map($=>X(Xt,{option:$,label:$.label,value:$.value,icon:n.icon,parentValue:M(()=>n.modelValue),handleChildClick:N=>{x("childClick"),f.value=!0,m("update:modelValue",N)}})))||[],k=M(()=>{let $=[];return n.icon&&$.push("span-text"),f.value&&$.push("text-main"),$});return()=>X("div",{class:C.value,onMouseenter:y,onMouseleave:T},[X("span",{class:"gt-dropdown-span",onClick:()=>x()},[n.icon?X(A,{name:"file"}):"",X("span",{class:k.value},[V.value])]),X("span",{class:"gt-dropdown-icon",onClick:()=>x()},[X(A,{name:"chevronDown"})]),X("div",{class:o.value,onMouseleave:T},h)])}};var Qe=B(Qt,[["__file","D:/frontEnd/gt-UI/src/components/GDropdown.vue"]]);const el={class:"gt-input-wrapper"},tl={key:0,class:"gt-input-label"},ll={class:"relative"},al=["type","placeholder"],sl={key:1,class:"gt-input-error-msg"},ol={name:"gt-input",inheritAttrs:!1,customOptions:{}},nl=Object.assign(ol,{props:{name:{default:null},disabled:{type:Boolean,default:!1},modelValue:{},label:{default:null},value:{default:null},type:{default:"text"},clearable:{type:Boolean,default:!1},green:{type:Boolean,default:!1},parentValue:{default:null},parentvalue:{default:null},placeholder:{default:null},validResult:{default:{}},handleValChange:{default:()=>{}},handleRulesValid:{default:async()=>{}}},emits:["update:modelValue"],setup(n,{emit:g}){const{name:m,disabled:r,modelValue:p,label:f,value:x,type:y,green:T,clearable:C,parentValue:o,parentvalue:V,placeholder:h,validResult:k,handleValChange:O,handleRulesValid:$}=n,N=["text","number","password"],W={text:"\u8F38\u5165\u6587\u5B57\u5167\u5BB9",number:"\u8F38\u5165\u6578\u5B57\u5167\u5BB9",password:"\u8F38\u5165\u5BC6\u78BC"},Z=M(()=>{var q;return(q=k[m])==null?void 0:q.message}),ue=M(()=>{var S;let q=[];return T&&q.push("gt-input-green"),(S=k[m])!=null&&S.message&&q.push("gt-input-error"),q}),Y=I(p||(o==null?void 0:o.value)||""),P=q=>{o?O(Y.value,m):g("update:modelValue",Y.value)},G=async()=>{$&&m&&$(Y.value,m,"blur")},F=()=>{Y.value="",O("",m),$(Y.value,m,"blur")};return(q,S)=>(i(),b("div",el,[n.label?(i(),b("div",tl,E(n.label),1)):v("v-if",!0),s("div",ll,[ce(s("input",{class:R(["gt-input",e(ue)]),type:N.includes(n.type)?n.type:"text","onUpdate:modelValue":S[0]||(S[0]=d=>Y.value=d),placeholder:n.placeholder||W[n.type],onChange:P,onBlur:G},null,42,al),[[ut,Y.value]]),n.clearable?(i(),w(A,{key:0,class:"clear-icon",name:"x",onClick:Q(F,["stop"])},null,8,["onClick"])):v("v-if",!0),e(Z)?(i(),b("div",sl,E(e(Z)),1)):v("v-if",!0)])]))}});var K=B(nl,[["__file","D:/frontEnd/gt-UI/src/components/GInput.vue"]]);const dl={props:{name:{default:null},modelValue:{default:{}},rules:{type:Object,default:{}}},emits:["update:modelValue"],setup(n,{slots:g,emit:m}){const r=ie(),p=ne({}),f=ne(n.modelValue);n.name&&(r.appContext.config.globalProperties["gForms-"+n.name]={callValid:()=>new Promise((o,V)=>{Object.keys(n.rules).forEach(h=>{T(f[h],h).then(k=>{p[h]=null,o(!0)}).catch(k=>{p[h]={message:k}})})})});const x=(o,V)=>{f[V]=o,m("update:modelValue",f)},y=(o,{require:V=!1,message:h="",valid:k=null})=>new Promise((O,$)=>{V&&!o&&$(h),k&&!k(o)&&$(h),O(!0)}),T=async(o,V,h="submit")=>{p[V]&&(p[V]=null);let k=n.rules;return new Promise((O,$)=>{if(k[V]&&Array.isArray(k[V])){let N=[];k[V].forEach(W=>{(W.trigger===h||h==="submit")&&N.push(y(o,W))}),Promise.all(N).then(W=>{p[V]=null,O(!0)}).catch(W=>{p[V]={message:W},$(W)})}else O(!0)})},C=g.default()?g.default().filter(o=>o.type.name==="gt-input").map(o=>te(ee({},o),{props:te(ee({},o.props),{parentValue:M(()=>o.props.name?n.modelValue[o.props.name]:null),validResult:p,handleValChange:x,handleRulesValid:T})})):[];return()=>X("form",{class:"gt-form"},C)}};var il=B(dl,[["__file","D:/frontEnd/gt-UI/src/components/GForm.vue"]]);const ul={props:{label:{type:String,default:"\u6A19\u7C64"},type:{type:String,default:"DEFAULT"},border:{type:Boolean,default:!1},dot:{type:Boolean,default:!1}},setup(n){const{label:g,type:m,border:r,dot:p}=n,f={DEFAULT:"green",SECOND:"blue",DANGER:"red",WARNING:"yellow",ACTIVITY:"orange"},x=()=>{let y=[f[m.toUpperCase()]];return r&&y.push("is-border"),m.toUpperCase()=="ACTIVITY"&&(y=["full-orange"]),y};return(y,T)=>(i(),b("div",{class:R(["gt-tag",x()])},[n.dot?(i(),w(A,{key:0,class:"w-6",name:"circle"})):v("v-if",!0),u(" "+E(n.label),1)],2))}};var H=B(ul,[["__file","D:/frontEnd/gt-UI/src/components/GTag.vue"]]);const rl={class:"table-head"},cl={key:0,class:"head-column checknoxColumn"},ml=["onClick"],pl={key:0,class:"loading"},fl=["onClick"],gl=["onClick"],vl={key:1},bl={props:{name:{},columns:{type:Array,default:[]},data:{type:Array,default:[]},isCheckBox:{type:Boolean,default:!0},height:{},rowClick:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},setup(n){const{name:g,columns:m,isCheckBox:r,data:p,height:f,getCheckedList:x,rowClick:y,isLoading:T}=n,C={CHECKBOX:"checkbox",ASC:"asc",DESC:"desc"},o=tt(),V=Object.keys(o),h=I(!1),k=ne({}),O=M(()=>m.map((G,F)=>G.name?{name:G.name,label:G.label||"",width:G.width||80,sort:G.sort||!1}:!1).filter(G=>G)),$=P=>{let G=[];return P.sort&&G.push("cursor-pointer"),G},N=I([...p.map(P=>te(ee({},P),{checked:!1}))]),W=M(()=>O.value.map(G=>G.width).reduce((G,F)=>G+F)+80),Z=M(()=>{let P=parseInt(f)-40;return P?P+"px":"none"});he(()=>h.value,()=>{N.value=N.value.map(P=>te(ee({},P),{checked:h.value}))});const ue=P=>{if(P.sort){let G=P.name;k[G]===C.ASC||!k[G]?(N.value.sort((F,q)=>q[G]-F[G]),k[G]=C.DESC):(N.value.sort((F,q)=>F[G]-q[G]),k[G]=C.ASC)}},Y=P=>{if(!y)return!1;P.checked=!P.checked};return me(()=>{if(g){const P=ie();P.appContext.config.globalProperties[`gt-table-${g}`]={getCheckedList:()=>N.value.filter(G=>G.checked)}}}),(P,G)=>{const F=ae,q=A;return i(),b("div",{class:R(["gt-table-wrapper",n.isLoading?"overflow-hidden":""])},[s("div",{class:"gt-table",style:de({width:e(W)+"px"})},[s("div",rl,[n.isCheckBox?(i(),b("div",cl,[t(F,{modelValue:h.value,"onUpdate:modelValue":G[0]||(G[0]=S=>h.value=S),type:"white"},null,8,["modelValue"])])):v("v-if",!0),(i(!0),b(z,null,se(e(O),S=>(i(),b("div",{key:S.name,style:de({width:S.width+"px"}),class:R(["head-column",$(S)]),onClick:()=>ue(S)},[s("span",null,E(S.label),1),S.sort?(i(),w(q,{key:0,class:"sortIcon",name:"sequence"})):v("v-if",!0)],14,ml))),128))]),s("div",{class:R(["table-body",n.isLoading?"overflow-hidden":""]),style:de({"max-height":e(Z)})},[n.isLoading?(i(),b("div",pl,[t(lt)])):(i(!0),b(z,{key:1},se(N.value,(S,d)=>(i(),b("div",{class:R(["row",S.checked?"row-check":""]),key:d,onClick:()=>{Y(S)}},[n.isCheckBox?(i(),b("div",{key:0,class:"row-cell checknoxColumn",onClick:()=>{Y(S)}},[S.checked?(i(),w(F,{key:0,modelValue:S.checked,"onUpdate:modelValue":J=>S.checked=J,type:"white"},null,8,["modelValue","onUpdate:modelValue"])):v("v-if",!0),S.checked?v("v-if",!0):(i(),w(F,{key:1,modelValue:S.checked,"onUpdate:modelValue":J=>S.checked=J,type:"white"},null,8,["modelValue","onUpdate:modelValue"]))],8,gl)):v("v-if",!0),(i(!0),b(z,null,se(e(O),(J,pe)=>(i(),b("div",{key:J.name+"-"+d+"-"+pe,style:de({width:J.width+"px"}),class:"row-cell"},[e(V).includes(J.name)?ve(P.$slots,J.name,{key:0,row:S}):(i(),b("span",vl,E(S[J.name]||J.name),1))],4))),128))],10,fl))),128))],6)],4)],2)}}};var hl=B(bl,[["__file","D:/frontEnd/gt-UI/src/components/GTable/index.vue"]]);const _l={class:"gt-sort-label-wrapper"},wl={if:"labelName"},xl={props:{modelValue:{},options:{type:Array,default:[]},labelName:{type:String}},emits:["update:modelValue"],setup(n,{emit:g}){var C;const{modelValue:m,options:r,labelName:p}=n;let f=r.findIndex(o=>o.value==m);const x=I(f),y=I(((C=r[f])==null?void 0:C.label)||null);he(()=>x.value,(o,V)=>{var h;y.value=((h=r[o])==null?void 0:h.label)||null});const T=()=>{if(x.value==null)return!1;let o=r[x.value+1]?x.value+1:0,V=r[o].value;g("update:modelValue",V),x.value=o};return(o,V)=>(i(),b("div",_l,[s("span",wl,E(n.labelName),1),s("div",{class:"gt-sort-label",onClick:T},[u(E(y.value?y.value:"N/A")+" ",1),t(A,{class:"icon",name:"sequence",size:"md"})])]))}};var Vl=B(xl,[["__file","D:/frontEnd/gt-UI/src/components/GSortLabel.vue"]]);const yl={props:{modelValue:{type:Boolean,default:!1},optionName:{type:String,default:"option"}},emits:["update:modelValue"],setup(n,{emit:g}){const{modelValue:m}=n,r=I(m),p=()=>{let f=!r.value;r.value=f,g("update:modelValue",f)};return(f,x)=>(i(),b("div",{class:R(["gt-filter-option",r.value?"active":""]),onClick:p},E(n.optionName),3))}};var kl=B(yl,[["__file","D:/frontEnd/gt-UI/src/components/GFilterOption.vue"]]);const Tl={props:{name:{type:String,default:"file"}},setup(n){return(g,m)=>(i(),w(L,{round:"",noBorder:"",type:"black",class:"gt-button-file"},{default:c(()=>[t(A,{name:n.name,size:"md"},null,8,["name"])]),_:1}))}};var Cl=B(Tl,[["__file","D:/frontEnd/gt-UI/src/components/GButtonFile.vue"]]);const Ul={setup(n){return(g,m)=>(i(),w(L,{round:"",noBorder:"",type:"white",class:"gt-button-close"},{default:c(()=>[t(A,{name:"x",size:"md"})]),_:1}))}};var at=B(Ul,[["__file","D:/frontEnd/gt-UI/src/components/GButtonClose.vue"]]);const Ll={class:"gt-pagination"},$l={class:"flex"},Dl=u("\u4E0A\u4E00\u9801 "),Il={class:"pageNums"},Gl=["onClick"],El=u(" \u4E0B\u4E00\u9801"),Al={props:{pageInfo:{type:Object,default:{currentPage:13,total:200,perPageNums:15}}},emits:["updatePage"],setup(n,{emit:g}){const{pageInfo:m}=n,r=I(m.currentPage||1),p=1,f=Math.ceil(m.total/m.perPageNums);he(()=>r.value,o=>{g("updatePage",o)});const x=M(()=>{new Array(f).fill(1).map((O,$)=>O+$).findIndex(O=>O==r.value);let V=!1,h=!1;return(r.value<=p+2||r.value>f-3)&&(V=!0),V={head:[p,"pre-dot"],tail:["next-dot",f]},r.value<=p+3&&(V.head=[p],h=[p+1,p+2,p+3,p+4,p+5]),r.value>=f-3&&(V.tail=[f],h=[f-5,f-4,f-3,f-2,f-1]),h||(h=[r.value-2,r.value-1,r.value,r.value+1,r.value+2]),[...V.head,...h,...V.tail]}),y=()=>{r.value!=p&&(r.value=r.value-1)},T=()=>{r.value!=f&&(r.value=r.value+1)},C=o=>{switch(o){case"pre-dot":{r.value=r.value-5;break}case"next-dot":{r.value=r.value+5;break}default:r.value=o}};return(o,V)=>{const h=A;return i(),b("div",Ll,[s("div",$l,[s("div",{class:R(["pre-next pre",r.value==p?"disable cursor-not-allowed":""]),onClick:y},[t(h,{name:"chevronLeft",class:"w-8"}),Dl],2),s("div",Il,[(i(!0),b(z,null,se(e(x),k=>(i(),b("div",{class:R(["num",r.value==k?"current":k=="pre-dot"||k=="next-dot"?k:""]),key:"n"+k,onClick:()=>{C(k)}},[k!="pre-dot"&&k!="next-dot"?(i(),b(z,{key:0},[u(E(k),1)],2112)):(i(),b(z,{key:1},[n.pageInfo.total?(i(),w(h,{key:0,name:"ellipsis",class:"rotate-90 text-primaryDarker",size:"md"})):v("v-if",!0)],2112))],10,Gl))),128))]),s("div",{class:R(["pre-next next",r.value==e(f)?"disable cursor-not-allowed":""]),onClick:T},[El,t(h,{name:"chevronRight",class:"w-8"})],2)])])}}};var Sl=B(Al,[["__file","D:/frontEnd/gt-UI/src/components/GPagination.vue"]]);const Bl={class:"gt-tabs-wrapper"},Rl={class:"tabs"},Ol=["onClick"],Pl={class:"content"},jl=u(" //\u7121\u5C0D\u61C9slot "),Nl={props:{tabs:{type:Array,default:[{name:"tab1"},{name:"tab2"}]}},setup(n){const{tabs:g}=n,m=tt(),r=Object.keys(m),p=I(g[0].name),f=x=>{p.value=x};return(x,y)=>(i(),b("div",Bl,[s("div",Rl,[(i(!0),b(z,null,se(n.tabs,T=>(i(),b("div",{class:R(["tab",p.value==T.name?"current":""]),key:T.name,onClick:()=>{f(T.name)}},E(T.name),11,Ol))),128))]),s("div",Pl,[e(r).includes(p.value)?ve(x.$slots,p.value,{key:0}):(i(),b(z,{key:1},[jl],2112))])]))}};var Ml=B(Nl,[["__file","D:/frontEnd/gt-UI/src/components/GTabs.vue"]]);const Fl=["data-active","onDragenter","onDragover","onDragleave","onDrop"],Hl={emits:["files-dropped"],setup(n,{emit:g}){let m=I(!1),r=null;function p(){m.value=!0,clearTimeout(r)}function f(){r=setTimeout(()=>{m.value=!1},50)}function x(C){f(),g("files-dropped",[...C.dataTransfer.files])}function y(C){C.preventDefault()}const T=["dragenter","dragover","dragleave","drop"];return me(()=>{T.forEach(C=>{document.body.addEventListener(C,y)})}),rt(()=>{T.forEach(C=>{document.body.removeEventListener(C,y)})}),(C,o)=>(i(),b("div",{"data-active":e(m),onDragenter:Q(p,["prevent"]),onDragover:Q(p,["prevent"]),onDragleave:Q(f,["prevent"]),onDrop:Q(x,["prevent"])},[ve(C.$slots,"default",{dropZoneActive:e(m)})],40,Fl))}};var zl=B(Hl,[["__file","D:/frontEnd/gt-UI/src/components/DropZone.vue"]]);const ql={class:"text"},Wl={class:"imgLoaded"},Yl=["src"],Jl={emits:["file"],setup(n,{emit:g}){const m=I(),r=I(null),p=I(!1),f=I(!1),x=()=>{!f.value&&!r.value&&m.value.imgInput.click()},y=V=>{p.value=!0;let h=new FileReader;h.onload=k=>{r.value=k.target.result,f.value=!0,p.value=!1,g("file",V)},h.readAsDataURL(V)},T=V=>{if(!V.length||!V[0])return!1;y(V[0])},C=V=>{let h=V.target.files||V.dataTransfer.files;if(!h.length||!h[0])return!1;y(h[0])},o=()=>{f.value=!1,r.value=null,m.value.reset()};return(V,h)=>(i(),w(zl,{class:"gt-img-upload-wrapper",onFilesDropped:T},{default:c(({dropZoneActive:k})=>[s("div",{class:R(["gt-img-upload",k?"zone-active":""]),onDragover:h[0]||(h[0]=Q(()=>{},["prevent"])),onClick:x},[ce(s("div",ql,"\u62D6\u66F3\u4E0A\u50B3\u9078\u64C7\u5716\u7247",512),[[ge,!p.value&&!f.value]]),p.value?(i(),w(re,{key:0,class:"mr-2",percent:0,auto:""})):v("v-if",!0),f.value?(i(),w(Cl,{key:1,class:"deleteIcon",name:"trash",onClick:Q(o,["stop"])},null,8,["onClick"])):v("v-if",!0),s("div",Wl,[ce(s("img",{src:r.value,alt:"img"},null,8,Yl),[[ge,f.value]])]),s("form",{action:"",ref_key:"fileInputForm",ref:m,class:"none"},[s("input",{name:"imgInput",type:"file",hidden:"",onChange:C},null,32)],512)],34)]),_:1}))}};var Zl=B(Jl,[["__file","D:/frontEnd/gt-UI/src/components/GImgUpload.vue"]]);const Kl={props:{text:{type:String,default:"\u5132\u5B58\u6210\u529F!"}},setup(n){const g=I(!1),m=I(!1),r=ie();return r.appContext.config.globalProperties.handleMessageToastTrigger=({time:p=3e3})=>{g.value||(g.value=!0,setTimeout(()=>{g.value=!1,m.value=!0},p))},(p,f)=>(i(),b("div",{class:R(["gt-message-toast",g.value?"gt-ani-toast-in":m.value?"gt-ani-toast-out":""])},[s("span",null,E(n.text),1)],2))}};var Xl=B(Kl,[["__file","D:/frontEnd/gt-UI/src/components/GMessageToast.vue"]]);const Ql={class:"dialog-head"},ea={class:"dialog-footer"},ta=u("\u53D6\u6D88"),la=u("\u78BA\u5B9A"),aa=u("\u522A\u9664"),sa={props:{modelValue:{type:Boolean,default:!1},title:{type:String},align:{type:String,default:"left"},handleComfirmCallback:{type:Function,default:()=>{}},mode:{type:String,default:"comfirm"},maxWidth:{type:Number,default:480},maxHeight:{type:Number,default:400}},emits:["update:modelValue"],setup(n,{emit:g}){const{modelValue:m,title:r,align:p,handleComfirmCallback:f,mode:x,maxWidth:y,maxHeight:T}=n,C={COMFIRM:"comfirm",DELETE:"delete"};I(m);const o=I(),V=I(!1),h=()=>{f(),g("update:modelValue",!1)},k=$=>{$.target.classList.contains("gt-dialog-wrapper")&&g("update:modelValue",!1)},O=$=>{g("update:modelValue",!1)};return ct(()=>{var N;let $=Math.ceil((N=o.value.getBoundingClientRect())==null?void 0:N.height);V.value=$>T}),($,N)=>{const W=at,Z=L;return i(),b("div",{class:R(["gt-dialog-wrapper",n.modelValue?"active":""]),onClick:k},[s("div",{class:R(["gt-dialog",[`text-${n.align}`,n.modelValue?"active":""]]),onClick:N[0]||(N[0]=Q(()=>{},["prevent"])),style:de({maxWidth:n.maxWidth+"px"})},[s("div",Ql,[u(E(n.title)+" ",1),t(W,{class:"closeIcon",onClick:O})]),s("div",{class:"dialog-body",style:de({maxHeight:n.maxHeight+"px",overflowY:V.value?"scroll":"none"})},[s("div",{class:"dialog-body-in",ref_key:"dialogBodyIn",ref:o},[ve($.$slots,"default")],512)],4),s("div",ea,[t(Z,{round:"",type:"white",class:"btn-cancel",onClick:O},{default:c(()=>[ta]),_:1}),n.mode==C.COMFIRM?(i(),w(Z,{key:0,round:"",onClick:h},{default:c(()=>[la]),_:1})):(i(),w(Z,{key:1,round:"",type:"red",onClick:h},{default:c(()=>[aa]),_:1}))])],6)],2)}}};var et=B(sa,[["__file","D:/frontEnd/gt-UI/src/components/GDialog.vue"]]);const oa={class:"flex innerWrapper"},na={class:"paragraphHead"},da=u("\u7248\u578B"),ia={class:"w-full md:w-3/4 mx-auto relative"},ua=u("\u5927\u6A39\u5F8C\u53F0layout"),ra={class:"paragraphHead"},ca=u("\u9078\u55AE"),ma={class:"w-full md:w-3/4 mx-auto relative"},pa={class:"paragraphHead"},fa=u("\u64CD\u4F5C"),ga={class:"w-full md:w-3/4 mx-auto relative mb-12"},va=u("\u5716\u7247\u4E0A\u50B3"),ba={class:"w-full md:w-3/4 mx-auto relative mb-12"},ha=u("\u7BE9\u9078\u9078\u9805"),_a={class:"flex"},wa={class:"w-full md:w-3/4 mx-auto relative mb-12"},xa=u("\u5206\u9801\u6A19\u7C64"),Va=u("hello , tab1 "),ya=u(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quis assumenda similique possimus ipsam consequatur animi ipsa fugit quia. Accusantium. "),ka=u("hello , tab2"),Ta=u(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae alias earum exercitationem inventore dignissimos velit dolores maiores quod accusantium, reiciendis cupiditate modi quia rem at ut laborum vero doloribus rerum? "),Ca={class:"w-full md:w-3/4 mx-auto relative mb-12"},Ua=u("\u6392\u5E8F\u6A19\u7C64"),La={class:"w-full md:w-3/4 pr-2 mx-auto relative mb-12"},$a=u("\u65E5\u671F\u9078\u64C7"),Da={key:0},Ia={class:"w-full md:w-3/4 mx-auto mb-6 relative"},Ga=u("\u8F38\u5165\u6846-\u9A57\u8B49"),Ea=u("\u6B04\u4F4D\u9A57\u8B49"),Aa={key:0},Sa={class:"w-full md:w-3/4 mx-auto mb-6 relative"},Ba=u("\u8F38\u5165\u6846-\u6A23\u5F0F"),Ra={class:"w-full md:w-3/4 mx-auto mb-6 relative"},Oa=u("\u4E0B\u62C9\u9078\u9805\u9EDE\u64CA\u6A21\u5F0F"),Pa={key:0},ja={class:"w-full md:w-3/4 mx-auto mb-6 relative"},Na=u("\u4E0B\u62C9\u9078\u9805\u505C\u7559\u6A21\u5F0F"),Ma={key:0},Fa={class:"w-full md:w-3/4 mx-auto relative"},Ha=u("\u55AE\u52FE\u9078\u6B04"),za={class:"mb-3 px-2 w-full md:w-3/4"},qa={class:"mb-3 flex w-full"},Wa={class:"w-full md:w-3/4 mx-auto relative"},Ya=u("\u7FA4\u7D44\u52FE\u9078\u6B04"),Ja={class:"mb-3 px-2 w-full md:w-3/4"},Za={key:0},Ka={class:"w-full md:w-3/4 mx-auto relative"},Xa=u("\u55AE\u9078\u6B04"),Qa={class:"mb-3 px-2 w-full md:w-3/4"},es={class:"mb-3 flex w-full"},ts={class:"w-full md:w-3/4 mx-auto relative"},ls=u("\u7FA4\u7D44\u55AE\u9078\u6B04"),as={class:"mb-3 px-2 w-full md:w-3/4"},ss={class:"w-full md:w-3/4 mx-auto relative"},os=u("\u5207\u63DB\u958B\u95DC"),ns={class:"mb-3 px-2 w-full md:w-3/4"},ds={class:"mb-3 flex w-full"},is={class:"paragraphHead"},us=u("\u904E\u5834\u6548\u679C"),rs={class:"mb-3 px-2 w-full md:w-3/4"},cs={class:"flex justify-start mb-3 relative"},ms={class:"w-1/2 md:w-1/3"},ps=u("\u9801\u9762\u8F09\u5165\u4E2D"),fs=u("\u986F\u793A"),gs={class:"flex justify-start mb-3 relative"},vs=u("\u8F09\u5165\u4E2D"),bs={class:"flex justify-start mb-3 relative"},hs=u("\u4E0A\u50B3\u4E2D"),_s={class:"mb-3 px-2 w-full"},ws={class:"mb-3 flex w-full"},xs={class:"flex justify-start mb-3 relative"},Vs=u("\u4E0B\u8F09\u4E2D"),ys={class:"mb-3 px-2 w-full"},ks={class:"mb-3 flex w-full"},Ts={class:"paragraphHead"},Cs=u("\u8996\u7A97"),Us={class:"mb-3 px-2 w-full md:w-3/4 relative"},Ls=u("\u901A\u77E5-\u6A23\u5F0FRECTANGLE"),$s={class:"flex justify-start mb-3"},Ds={class:"w-1/2 md:w-1/3"},Is=u("\u986F\u793AMessage info"),Gs={class:"w-1/2 md:w-1/3"},Es=u("\u986F\u793AMessage warning"),As={class:"w-1/2 md:w-1/3"},Ss=u("\u986F\u793AMessage error"),Bs={class:"mb-3 px-2 w-full md:w-3/4 relative"},Rs=u("\u901A\u77E5-\u6A23\u5F0FTOAST"),Os={class:"flex justify-start mb-3"},Ps={class:"w-1/2 md:w-1/3"},js=u("\u986F\u793AMessage Toast"),Ns={class:"mb-3 px-2 w-full md:w-3/4 relative"},Ms=u("DIALOG"),Fs={class:"flex justify-start mb-3"},Hs=u("body~~"),zs=u("\u78BA\u5B9A\u522A\u9664\u55CE? "),qs={class:"w-1/2 md:w-1/3"},Ws=u("\u986F\u793ADialog Comfirm"),Ys={class:"w-1/2 md:w-1/3"},Js=u("\u986F\u793ADialog Delete"),Zs={class:"paragraphHead"},Ks=u("\u6587\u5B57"),Xs={class:"mb-3 px-2 w-full md:w-3/4 relative"},Qs=u("\u6A19\u984C"),eo=u("Bold / 24 / \u6587\u5B57\u6A23\u5F0F"),to=u("Medium / 20 / \u6587\u5B57\u6A23\u5F0F"),lo=u("Bold / 18 / \u6587\u5B57\u6A23\u5F0F"),ao=u("Medium / 16 / \u6587\u5B57\u6A23\u5F0F"),so={class:"paragraphHead"},oo=u("\u6309\u9215"),no={class:"mb-3 px-2 w-full md:w-3/4"},io={class:"mb-8 relative"},uo=u("PILL"),ro={class:"flex justify-between mb-3"},co=u("\u6309\u9215"),mo=u("\u6309\u9215"),po=u("\u6309\u9215"),fo=u("\u6309\u9215"),go={class:"mb-8 relative"},vo=u("FLAT - 1"),bo={class:"flex justify-between mb-3"},ho=u("\u6309\u9215"),_o=u("\u6309\u9215"),wo=u("\u6309\u9215"),xo=u("\u6309\u9215"),Vo={class:"mb-8 relative"},yo=u("FLAT - 2"),ko={class:"flex justify-between mb-3"},To=u("\u4E0A\u4E00\u9801"),Co=u("\u4E0A\u4E00\u9801"),Uo=u("\u4E0A\u4E00\u9801"),Lo=u("\u4E0A\u4E00\u9801"),$o={class:"flex justify-between mb-3"},Do=u("\u4E0B\u4E00\u9801"),Io=u("\u4E0B\u4E00\u9801"),Go=u("\u4E0B\u4E00\u9801"),Eo=u("\u4E0B\u4E00\u9801"),Ao={class:"mb-8 relative"},So=u("ROUND"),Bo={class:"w-full flex justify-between mb-3"},Ro=u("\u6309\u9215"),Oo=u("\u6309\u9215"),Po=u("\u6309\u9215"),jo=u("\u6309\u9215"),No=u("\u6309\u9215"),Mo=u("ROUND-ICON"),Fo={class:"w-full flex justify-start mb-3 p-4"},Ho={class:"paragraphHead"},zo=u("\u5716\u6A19"),qo={class:"mb-3 px-2 w-full md:w-3/4"},Wo={class:"w-1/2 md:w-1/3 flex justify-start items-center"},Yo={class:"text-gray-600 leading-10"},Jo={class:"w-1/2 md:w-1/3 flex justify-start items-center"},Zo={class:"text-gray-600 leading-10"},Ko={class:"paragraphHead"},Xo=u("\u6A19\u7C64"),Qo={class:"mb-3 px-2 w-full md:w-3/4 relative"},en=u("BORDER"),tn={class:"w-1/2 flex justify-between mb-3"},ln=u("NO BORDER"),an={class:"w-1/2 flex justify-between mb-3"},sn=u("DOT"),on={class:"w-1/2 flex justify-between mb-3"},nn=u("LABEL"),dn={class:"w-1/2 flex justify-between mb-3"},un=u("OTHERS"),rn={class:"w-1/2 flex justify-between mb-3"},cn={class:"paragraphHead"},mn=u("\u8CC7\u6599"),pn={class:"w-full md:w-3/4 mx-auto relative"},fn=u("\u8868\u683C"),gn={class:"flex justify-between"},vn={class:"flex justify-start"},bn=u("\u7DE8\u8F2F"),hn=u("\u522A\u9664"),_n=u("\u7576\u524D\u9078\u64C7\u986F\u793A"),wn=u("\u8F09\u5165\u4E2D\u986F\u793A"),xn={class:"w-full md:w-3/4 mx-auto relative mb-12"},Vn=u("\u5206\u9801\u9078\u64C7"),yn={key:0},kn={class:"w-1/5 flex flex-col scroll-to-box relative"},Tn={class:"absolute left-0 top-0"},Cn=["id","onClick"],Un={setup(n){const g=I(),m=[{id:"s1",name:"\u5927\u6A39\u5F8C\u53F0layout"},{id:"s1b",name:"\u9078\u55AE"},{id:"s2t02",name:"\u5716\u7247\u4E0A\u50B3"},{id:"s2t0",name:"\u7BE9\u9078\u9078\u9805"},{id:"s2t01",name:"\u5206\u9801\u6A19\u7C64"},{id:"s2t",name:"\u6392\u5E8F\u6A19\u7C64"},{id:"s2",name:"\u65E5\u671F\u9078\u64C7"},{id:"s3",name:"\u8F38\u5165\u6846-\u9A57\u8B49"},{id:"s4",name:"\u8F38\u5165\u6846-\u6A23\u5F0F"},{id:"s5",name:"\u4E0B\u62C9\u9078\u9805\u9EDE\u64CA\u6A21\u5F0F"},{id:"s6",name:"\u4E0B\u62C9\u9078\u9805\u505C\u7559\u6A21\u5F0F"},{id:"s7",name:"\u55AE\u52FE\u9078\u6B04"},{id:"s8",name:"\u7FA4\u7D44\u52FE\u9078\u6B04"},{id:"s9",name:"\u55AE\u9078\u6B04"},{id:"s9-1",name:"\u7FA4\u7D44\u55AE\u9078\u6B04"},{id:"s10",name:"\u5207\u63DB\u958B\u95DC"},{id:"s11",name:"\u9801\u9762\u8F09\u5165\u4E2D"},{id:"s12",name:"\u8F09\u5165\u4E2D"},{id:"s13",name:"\u4E0A\u50B3\u4E2D"},{id:"s14",name:"\u4E0B\u8F09\u4E2D"},{id:"s15",name:"\u901A\u77E5-\u6A23\u5F0FRECTANGLE"},{id:"s15b",name:"\u901A\u77E5-\u6A23\u5F0FTOAST"},{id:"s15c",name:"DIALOG"},{id:"s16",name:"\u6A19\u984C"},{id:"s17",name:"\u6309\u9215-PILL"},{id:"s18",name:"\u6309\u9215-FLAT-1"},{id:"s19",name:"\u6309\u9215-FLAT-2"},{id:"s20",name:"\u6309\u9215-ROUND"},{id:"s21",name:"\u5716\u6A19"},{id:"s22",name:"\u6A19\u7C64"},{id:"s23",name:"\u8868\u683C"},{id:"s24",name:"\u5206\u9801\u9078\u64C7"}],r=I("s1"),p=I(null),f=I(!1),x=j=>{f.value=!0,r.value=j,document.getElementById(j).scrollIntoView({behavior:"smooth"})},y=j=>{let a=parseInt(j.srcElement.scrollTop),U=p.value.findIndex(l=>l>a);!f.value&&m[U]?(r.value=m[U].id,document.getElementById(`r-${m[U].id}`).scrollIntoView({behavior:"smooth"})):setTimeout(()=>{f.value=!1},1e3)};me(()=>{p.value=m.map(j=>{var a,U;return Math.floor((U=(a=document.getElementById(j.id))==null?void 0:a.getBoundingClientRect())==null?void 0:U.y)})});const T=ie(),C=["up","arrowDown","arrowLeft","calendar","check","chevronDown","chevronLeft","chevronRight","chevronUp","circle","down","download","ellipsis","plus","search","sequence","trash","x"],o=ne({checkedArr:["2",22,2,8],checked0:!0,checked1:!1,checked2:!0,checked3:!1,radio0:!0,radio1:!1,radio2:!0,radio3:!1,radio4:2,switch0:!1,switch1:!0,switch2:!1,switch3:!0,dropdown0:2,dropdown1:3,input0:"hello",input2:123,input1:"",test:{test1:"hi~",test2:123,test3:""},time1:"",curSortLabelValue:"ASC"}),V={test1:[{require:!0,message:"\u5FC5\u586B",trigger:"blur"},{valid:j=>(""+j).length>3,message:"\u9577\u5EA6\u5927\u65BC3",trigger:"blur"}],test2:[{valid:j=>(""+j).length>10,message:"\u9577\u5EA6\u5927\u65BC10"}]},h=ne({columns:[{name:"id",label:"ID",width:180},{name:"product",label:"\u5546\u54C1\u540D\u7A31",sort:!1,width:180},{name:"price",label:"\u50F9\u683C",width:180,sort:!0},{name:"storage",label:"\u5EAB\u5B58",sort:!0},{name:"tags",width:220,label:"\u6A19\u7C64"},{name:"btns",width:200,label:""}],data:[{product:"aaa",price:200,storage:25,id:le()},{product:"bbbb",price:100,storage:15,id:le()},{product:"cc",price:300,storage:5,id:le()},{product:"dddddddddddddddddddddddd",price:400,storage:65,id:le()},{product:"bbbb",price:100,storage:15,id:le()},{product:"cc",price:300,storage:5,id:le()},{product:"aaa",price:200,storage:25,id:le()},{product:"bbbb",price:100,storage:15,id:le()}],filterOtions:{},isLoading:!1}),k=()=>{h.isLoading=!0,setTimeout(()=>{h.isLoading=!1},3e3)},O=I(1),$=j=>{O.value=j},N=()=>{T.appContext.config.globalProperties["gForms-form1"].callValid()},W=()=>{T.appContext.config.globalProperties.handleLoadingTrigger()},Z=j=>{T.appContext.config.globalProperties.handleMessageTrigger({type:j,title:"hello~"})},ue=()=>{T.appContext.config.globalProperties.handleMessageToastTrigger({time:2500})},Y=j=>{T.appContext.config.globalProperties.handleMessageTrigger({type:"info",title:"handle click",msg:`row id:${j.id}`})},P=()=>{let j=T.appContext.config.globalProperties["gt-table-products"].getCheckedList();j=j.map(a=>a.id),T.appContext.config.globalProperties.handleMessageTrigger({type:"info",title:"\u5DF2\u9078\u64C7",msg:`row ids:${j.join(",")}`})},G=j=>{},F=ne({show:!1,show2:!1,title:"Hello"}),q=(j=1)=>{switch(j){case 1:{F.show=!0;break}case 2:{F.show2=!0;break}}},S=[{label:"group1",children:[{label:"route1",icon:"",path:"/doc"},{label:"route2",icon:"",path:"/456"}]},{label:"group2",children:[{label:"route3",icon:"file",path:"/456"},{label:"route4",icon:"file",path:"/123"}]}],d=ne({layoutText:!1,loadText:!1,msgText:!1,msgToastText:!1,dialogText:!1,loadText:!1,inputsText0:!1,inputsText0_1:!1,inputsText1:!1,inputsText1_1:!1,inputsText2:!1,loadingText0:!1,loadingText1:!1,loadingText2:!1,titleText:!1,buttonText0:!1,buttonText1:!1,buttonText2:!1,buttonText3:!1,dropdown0:!1,dropdown1:!1,inputsText3:!1,inputsText4:!1,inputsTime1:!1,tagsText:!1,tableText:!1,sortLabelText:!1,filterOptionText:!1,paginationText:!1,tabsText:!1,imgUploadText:!1,menuText:!1}),J=`\`\`\` js
const menuRoutes = [
  {
    label: 'group1',
    children: [
      {
        label: 'route1',
        icon: '',
        path: '/doc',
      },
      {
        label: 'route2',
        icon: '',
        path: '/456',
      },
    ],
  },
  {
    label: 'group2',
    children: [
      {
        label: 'route3',
        icon: 'file',
        path: '/456',
      },
      {
        label: 'route4',
        icon: 'file',
        path: '/123',
      },
    ],
  },
];
 \`\`\`

 \`\`\` html
<g-menu active="1-1" :menu="menuRoutes" />
 \`\`\`

 `,pe=`\`\`\` html
<g-layout headText="Great Tree UI" title="GT\u958B\u767C">
  <template #sidebar> ... </template>
  <template #header> ... </template>
  <template #content> ... </template>
</g-layout>
 \`\`\`
`,_e="``` js\n  import { getCurrentInstance } from 'vue';\n  const instance = getCurrentInstance();\n  instance.appContext.config.globalProperties.handleLoadingTrigger({\n    time:1000 //Number(ms)\n  });\n ```\n\n ``` html\n  <!-- \u5728\u9801\u9762\u4E2D\u52A0\u5165 -->\n  <g-loading />\n ```\n ",we=`\`\`\` js
  import { getCurrentInstance } from 'vue';
  const instance = getCurrentInstance();
  instance.appContext.config.globalProperties.handleMessageTrigger({
    type, //'info', 'warning', 'error'
    title, //String
    msg, //String
  });
 \`\`\`

 \`\`\` html
  <!-- \u5728\u9801\u9762\u4E2D\u52A0\u5165 -->
  <g-message />
 \`\`\`

 `,xe=`\`\`\` js
  import { getCurrentInstance } from 'vue';
  const instance = getCurrentInstance();
  instance.appContext.config.globalProperties.handleMessageToastTrigger({
    time: 2500,
  });
 \`\`\`

 \`\`\` html
  <!-- \u5728\u9801\u9762\u4E2D\u52A0\u5165 -->
  <g-message-toast text='\u5132\u5B58\u5B8C\u6210~!' />
 \`\`\`

 `,Ve=`\`\`\` js
const dialogInfo = reactive({
  show: false,
  show2: false,
  title: 'Hello',
});
 \`\`\`

 \`\`\` html
<g-dialog :title="dialogInfo.title" v-model="dialogInfo.show">
  body~~
</g-dialog>

<g-dialog v-model="dialogInfo.show2" mode="delete">
  \u78BA\u5B9A\u522A\u9664\u55CE?
</g-dialog>
 \`\`\`

 `,ye='``` html\n<g-checkbox class="mr-4" v-model="inputs.checked0" />\n<g-checkbox class="mr-4" v-model="inputs.checked3" />\n<g-checkbox class="mr-4" v-model="inputs.checked1" disabled />\n<g-checkbox class="mr-4" v-model="inputs.checked2" disabled />\n ```\n',ke=`\`\`\` html
<g-checkbox-group v-model="inputs.checkedArr">
  <g-checkbox class="mr-4" :value="2" label="\u9078\u98052" />
  <g-checkbox class="mr-4" :value="4" label="\u9078\u98054" />
  <g-checkbox class="mr-4" :value="6" label="\u9078\u98056" disabled />
  <g-checkbox class="mr-4" :value="8" label="\u9078\u98058" disabled />
</g-checkbox-group>
 \`\`\`
`,Te='``` html\n<g-radiobox class="mr-4" v-model="inputs.radio0" />\n<g-radiobox class="mr-4" v-model="inputs.radio1" />\n<g-radiobox class="mr-4" v-model="inputs.radio2" disabled />\n<g-radiobox class="mr-4" v-model="inputs.radio3" disabled />\n ```\n',Ce=`\`\`\` html
<g-radiobox-group v-model="inputs.radio4">
  <g-radiobox class="mr-4" :value="2" label="\u9078\u98052" />
  <g-radiobox class="mr-4" :value="4" label="\u9078\u98054" />
  <g-radiobox class="mr-4" :value="6" label="\u9078\u98056" />
</g-radiobox-group>
 \`\`\`
`,Ue='``` html\n<g-switch class="mr-4" v-model="inputs.switch0" />\n<g-switch class="mr-4" v-model="inputs.switch1" />\n<g-switch class="mr-4" v-model="inputs.switch2" statusLabel />\n<g-switch class="mr-4" v-model="inputs.switch3" statusLabel />\n ```\n',Le="``` html\n<g-loading-icon />\n ```\n",$e='``` html\n<g-upload-icon class="mr-2" />\n<g-upload-icon class="mr-2" :percent="20" />\n<g-upload-icon class="mr-2" :percent="80" />\n<g-upload-icon class="mr-2" :percent="0" auto />\n ```\n',De='``` html\n<g-download-icon class="mr-2" />\n<g-download-icon class="mr-2" :percent="20" />\n<g-download-icon class="mr-2" :percent="100" />\n<g-download-icon class="mr-2" :percent="0" :auto="true" />\n ```\n',Ie='``` html\n<g-title :level="1">Bold / 24 / \u6587\u5B57\u6A23\u5F0F</g-title>\n<g-title :level="2">Medium / 20 / \u6587\u5B57\u6A23\u5F0F</g-title>\n<g-title :level="3">Bold / 18 / \u6587\u5B57\u6A23\u5F0F</g-title>\n<g-title>Medium / 16 / \u6587\u5B57\u6A23\u5F0F</g-title>\n ```\n',Ge='``` html\n<g-button pill>\u6309\u9215</g-button>\n<g-button pill type="yellow">\u6309\u9215</g-button>\n<g-button pill type="red">\u6309\u9215</g-button>\n<g-button pill type="black">\u6309\u9215</g-button>\n ```\n',Ee='``` html\n<g-button flat>\u6309\u9215</g-button>\n<g-button flat type="yellow">\u6309\u9215</g-button>\n<g-button flat type="red">\u6309\u9215</g-button>\n<g-button flat type="black">\u6309\u9215</g-button>\n ```\n',Ae=`\`\`\` html
<g-button flat><g-icons name="chevronLeft" class="w-8" />\u4E0A\u4E00\u9801</g-button>
<g-button flat type="yellow"><g-icons name="chevronLeft" class="w-8" />\u4E0A\u4E00\u9801</g-button>
<g-button flat type="red"><g-icons name="chevronLeft" class="w-8" />\u4E0A\u4E00\u9801</g-button>
<g-button flat type="black"><g-icons name="chevronLeft" class="w-8" />\u4E0A\u4E00\u9801</g-button>

<g-button flat><g-icons name="chevronRight" class="w-8" />\u4E0B\u4E00\u9801</g-button>
<g-button flat type="yellow"><g-icons name="chevronRight" class="w-8" />\u4E0B\u4E00\u9801</g-button>
<g-button flat type="red"><g-icons name="chevronRight" class="w-8" />\u4E0B\u4E00\u9801</g-button>
<g-button flat type="black"><g-icons name="chevronRight" class="w-8" />\u4E0B\u4E00\u9801</g-button>
 \`\`\`
`,Se=`\`\`\` html
<g-button round>\u6309\u9215</g-button>
<g-button round type="yellow">\u6309\u9215</g-button>
<g-button round type="red">\u6309\u9215</g-button>
<g-button round type="black">\u6309\u9215</g-button>
<g-button round type="white">\u6309\u9215</g-button>

//ROUND-ICON
<g-button round type="black" icon="file" />
<g-button-close />
 \`\`\`
`,Be=`\`\`\` html
<g-dropdown
  class="mr-4"
  v-model="inputs.dropdown0"
  :options="[
    { label: 'Aaaa', value: 1 },
    { label: 'Bbbb', value: 2 },
    { label: 'Gggggeeeeewwww', value: 3 },
  ]"
  clicked
  icon
/>
 \`\`\`
`,Re=`\`\`\` html
<g-dropdown
  v-model="inputs.dropdown1"
  :options="[
    { label: 'Aaaa', value: 1 },
    { label: 'Bbbb', value: 2 },
    { label: 'Gggggeeeeewwww', value: 3 },
  ]"
  hover
/>
 \`\`\`
`,Oe=`\`\`\` html
<g-form v-model="inputs.test" :rules="formRule" name="form1">
  <g-input label="\u9A57\u8B491" name="test1" green clearable />
  <g-input label="\u9A57\u8B492" name="test2" green clearable />
  <g-input label="\u9A57\u8B493" name="test3" green clearable />
</g-form>
 \`\`\`

 \`\`\` js
const formRule = {
  test1: [
    {
      require: true,
      message: '\u5FC5\u586B',
      trigger: 'blur',
    },
    {
      valid: (val) => ('' + val).length > 3,
      message: '\u9577\u5EA6\u5927\u65BC3',
      trigger: 'blur'
    },
  ],
  test2: [
    {
      valid: (val) => ('' + val).length > 10,
      message: '\u9577\u5EA6\u5927\u65BC10',
    },
  ],
};
 \`\`\`
`,Pe=`\`\`\` html
<g-input v-model="inputs.input0" />
<g-input v-model="inputs.input0" label="\u6587\u5B570" />
<g-input v-model="inputs.input2" type="number" label="\u6578\u5B570" />
<g-input v-model="inputs.input1" type="password" label="\u5BC6\u78BC0" />

<g-input v-model="inputs.input0" green />
<g-input v-model="inputs.input0" green label="\u6587\u5B571" />
<g-input v-model="inputs.input2" type="number" green label="\u6578\u5B571" />
<g-input v-model="inputs.input1" green type="password" label="\u5BC6\u78BC1" />
 \`\`\`
`,je='``` html\n  <g-time-picker v-model="inputs.time1" />\n ```\n',Ne=`\`\`\` html
//BORDER
  <g-tag type="default" border />
  <g-tag type="second" border />
  <g-tag type="warning" border />
  <g-tag type="danger" border />

//NO BORDER
  <g-tag type="default" />
  <g-tag type="second" />
  <g-tag type="warning" />
  <g-tag type="danger" />

//DOT
  <g-tag type="default" dot />
  <g-tag type="second" dot />
  <g-tag type="warning" dot />
  <g-tag type="danger" dot />

// LABEL
  <g-tag type="default" dot label='\u8A02\u55AE' />
  <g-tag type="second" border dot label='\u51FA\u8CA8' />
  <g-tag type="warning" dot label='\u8B66\u544A' />
  <g-tag type="danger" border dot label='\u932F\u8AA4' />

//OTHERS
  <g-tag type="activity" border />

 \`\`\`
`,Me=`\`\`\` javascript
const tableInfo = reactive({
  columns: [
    {
      name: 'id',
      label: 'ID',
      width: 180,
    },
    {
      name: 'product',
      label: '\u5546\u54C1\u540D\u7A31',
      sort: false,
      width: 180,
    },
    {
      name: 'price',
      label: '\u50F9\u683C',
      width: 180,
      sort: true,
    },
    {
      name: 'storage',
      label: '\u5EAB\u5B58',
      sort: true,
    },
    {
      name: 'tags',
      width: 220,
      label: '\u6A19\u7C64',
    },
    {
      name: 'btns',
      width: 200,
      label: '',
    },
  ],
  data: [
    { product: 'aaa', price: 200, storage: 25, id: uuidv4() },
    ...
    { product: 'bbbb', price: 100, storage: 15, id: uuidv4() },
  ],
    isLoading: false,
});

// \u76EE\u524D\u662F\u4F7F\u7528"name" \u8A3B\u518A\u4E00\u500B\u5168\u57DF\u7684table\u7269\u4EF6
instance.appContext.config.globalProperties[
  'gt-table-products'
].getCheckedList();

\`\`\``,Fe=`\`\`\` html
<g-table
  :columns="tableInfo.columns"
  :data="tableInfo.data"
  height="300"
  name="products"
  rowClick
  :isLoading="tableInfo.isLoading"
>
  <template v-slot:tags="{ row }">
    <div class="flex justify-between">
      <g-tag type="warning" border label="\u4E0A\u67B6\u4E2D" />
      <g-tag type="second" border dot label="\u53EF\u51FA\u8CA8" />
    </div>
  </template>

  <template v-slot:btns="{ row }">
    <div class="flex justify-between">
      <g-button
        flat
        @click="
          () => {
            handleRowClick(row);
          }
        "
        >\u7DE8\u8F2F</g-button
      >
      <g-button
        flat
        type="red"
        @click="
          () => {
            handleRowClick(row);
          }
        "
        >\u522A\u9664</g-button
      >
    </div>
  </template>
</g-table>
 \`\`\``,He=`\`\`\` html
<g-sort-label
  v-model="inputs.curSortLabelValue"
  labelName="\u65E5\u671F"
  :options="[
    {
      label: '\u905E\u589E',
      value: 'ASC',
    },
    {
      label: '\u905E\u6E1B',
      value: 'DESC',
    },
  ]"
/>
\`\`\``,ze=`\`\`\` javascript
const tableInfo = reactive({
  columns: [
    {
      name: 'id',
      label: 'ID',
      width: 180,
    },
    {
      name: 'product',
      label: '\u5546\u54C1\u540D\u7A31',
      sort: false,
      width: 180,
    },
    {
      name: 'price',
      label: '\u50F9\u683C',
      width: 180,
      sort: true,
    },
    {
      name: 'storage',
      label: '\u5EAB\u5B58',
      sort: true,
    },
    {
      name: 'tags',
      width: 220,
      label: '\u6A19\u7C64',
    },
    {
      name: 'btns',
      width: 200,
      label: '',
    },
  ],
  data: [...],
  filterOtions: {},
});

\`\`\``,qe=`\`\`\` html

<g-filter-option
  v-for="column in tableInfo.columns.filter((item) => item.label)"
  v-model="tableInfo.filterOtions[column.name]"
  :key="column.name"
  :optionName="column.label"
/>

\`\`\``,We="``` javascript\nconst curPage = ref(1);\nconst handleUpdatePage = (page) => {\n  curPage.value = page;\n};\n```",Ye='``` html\n<g-pagination\n  :pageInfo="{ currentPage: 1, total: 200, perPageNums: 15 }"\n  @updatePage="handleUpdatePage"\n/>\n```',Je=`\`\`\` html
  <g-tabs :tabs='[{ name: 'tab1' }, { name: 'tab2' }]'>
    <template v-slot:tab1="context">
      <g-title :level="1" class="mb-3" >hello , tab1</g-title>
    </template>
    <template v-slot:tab2="context">
      <g-title :level="1" class="mb-3" >hello , tab2</g-title>
    </template>
  </g-tabs>
\`\`\``,Ze='``` html\n<g-img-upload @file="handleFile" />\n```';return(j,a)=>{const U=mt("v-md-editor");return i(),b(z,null,[s("div",oa,[s("div",{ref_key:"el",ref:g,class:"w-4/5 py-4 flex justify-center items-center",onScroll:y},[s("div",na,[t(e(_),{level:1,class:"mb-3",id:"s1"},{default:c(()=>[da]),_:1})]),s("div",ia,[t(e(_),{level:2,class:"mb-3"},{default:c(()=>[ua]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).layoutText,"onUpdate:modelValue":a[0]||(a[0]=l=>e(d).layoutText=l),statusLabel:""},null,8,["modelValue"]),e(d).layoutText?(i(),w(U,{key:0,modelValue:pe,"onUpdate:modelValue":a[1]||(a[1]=l=>pe=l),mode:"preview"})):v("v-if",!0)]),s("div",ra,[t(e(_),{level:1,class:"mb-3",id:"s1b"},{default:c(()=>[ca]),_:1})]),s("div",ma,[t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).menuText,"onUpdate:modelValue":a[2]||(a[2]=l=>e(d).menuText=l),statusLabel:""},null,8,["modelValue"]),t(e(pt),{active:"1-1",menu:S}),e(d).menuText?(i(),w(U,{key:0,modelValue:J,"onUpdate:modelValue":a[3]||(a[3]=l=>J=l),mode:"preview"})):v("v-if",!0)]),s("div",pa,[t(e(_),{level:1,class:"mb-3"},{default:c(()=>[fa]),_:1})]),s("div",ga,[t(e(_),{level:2,class:"mb-3",id:"s2t02"},{default:c(()=>[va]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).imgUploadText,"onUpdate:modelValue":a[4]||(a[4]=l=>e(d).imgUploadText=l),statusLabel:""},null,8,["modelValue"]),t(e(Zl),{onFile:G}),e(d).imgUploadText?(i(),w(U,{key:0,modelValue:Ze,"onUpdate:modelValue":a[5]||(a[5]=l=>Ze=l),mode:"preview"})):v("v-if",!0)]),s("div",ba,[t(e(_),{level:2,class:"mb-3",id:"s2t0"},{default:c(()=>[ha]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).filterOptionText,"onUpdate:modelValue":a[6]||(a[6]=l=>e(d).filterOptionText=l),statusLabel:""},null,8,["modelValue"]),s("div",_a,[(i(!0),b(z,null,se(e(h).columns.filter(l=>l.label),l=>(i(),w(e(kl),{modelValue:e(h).filterOtions[l.name],"onUpdate:modelValue":be=>e(h).filterOtions[l.name]=be,key:l.name,optionName:l.label},null,8,["modelValue","onUpdate:modelValue","optionName"]))),128))]),e(d).filterOptionText?(i(),b(z,{key:0},[u(" tableInfo.filterOtions:"+E(e(h).filterOtions)+" ",1),e(d).filterOptionText?(i(),w(U,{key:0,modelValue:ze,"onUpdate:modelValue":a[7]||(a[7]=l=>ze=l),mode:"preview"})):v("v-if",!0),e(d).filterOptionText?(i(),w(U,{key:1,modelValue:qe,"onUpdate:modelValue":a[8]||(a[8]=l=>qe=l),mode:"preview"})):v("v-if",!0)],64)):v("v-if",!0)]),s("div",wa,[t(e(_),{level:2,class:"mb-3",id:"s2t01"},{default:c(()=>[xa]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).tabsText,"onUpdate:modelValue":a[9]||(a[9]=l=>e(d).tabsText=l),statusLabel:""},null,8,["modelValue"]),t(e(Ml),{tabs:[{name:"tab1"},{name:"tab2"}]},{tab1:c(l=>[t(e(_),{level:1,class:"mb-3"},{default:c(()=>[Va]),_:1}),ya]),tab2:c(l=>[t(e(_),{level:1,class:"mb-3"},{default:c(()=>[ka]),_:1}),Ta]),_:1}),e(d).tabsText?(i(),w(U,{key:0,modelValue:Je,"onUpdate:modelValue":a[10]||(a[10]=l=>Je=l),mode:"preview"})):v("v-if",!0)]),s("div",Ca,[t(e(_),{level:2,class:"mb-3",id:"s2t"},{default:c(()=>[Ua]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).sortLabelText,"onUpdate:modelValue":a[11]||(a[11]=l=>e(d).sortLabelText=l),statusLabel:""},null,8,["modelValue"]),t(e(Vl),{modelValue:e(o).curSortLabelValue,"onUpdate:modelValue":a[12]||(a[12]=l=>e(o).curSortLabelValue=l),labelName:"\u65E5\u671F",options:[{label:"\u905E\u589E",value:"ASC"},{label:"\u905E\u6E1B",value:"DESC"}]},null,8,["modelValue"]),e(d).sortLabelText?(i(),b(z,{key:0},[u(" inputs.curSortLabelValue:"+E(e(o).curSortLabelValue)+" ",1),e(d).sortLabelText?(i(),w(U,{key:0,modelValue:He,"onUpdate:modelValue":a[13]||(a[13]=l=>He=l),mode:"preview"})):v("v-if",!0)],64)):v("v-if",!0)]),s("div",La,[t(e(_),{level:2,class:"mb-3",id:"s2"},{default:c(()=>[$a]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).inputsTime1,"onUpdate:modelValue":a[14]||(a[14]=l=>e(d).inputsTime1=l),statusLabel:""},null,8,["modelValue"]),t(e(ft),{modelValue:e(o).time1,"onUpdate:modelValue":a[15]||(a[15]=l=>e(o).time1=l)},null,8,["modelValue"]),e(d).inputsTime1?(i(),b("p",Da,"inputs.time1:"+E(e(o).time1),1)):v("v-if",!0),e(d).inputsTime1?(i(),w(U,{key:1,modelValue:je,"onUpdate:modelValue":a[16]||(a[16]=l=>je=l),mode:"preview"})):v("v-if",!0)]),s("div",Ia,[t(e(_),{level:2,class:"mb-3",id:"s3"},{default:c(()=>[Ga]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).inputsText3,"onUpdate:modelValue":a[17]||(a[17]=l=>e(d).inputsText3=l),statusLabel:""},null,8,["modelValue"]),t(e(il),{modelValue:e(o).test,"onUpdate:modelValue":a[18]||(a[18]=l=>e(o).test=l),rules:V,name:"form1"},{default:c(()=>[t(e(K),{label:"\u9A57\u8B491",name:"test1",green:"",clearable:""}),t(e(K),{label:"\u9A57\u8B492",name:"test2",green:"",clearable:""}),t(e(K),{label:"\u9A57\u8B493",name:"test3",green:"",clearable:""})]),_:1},8,["modelValue"]),t(e(L),{class:"mb-4",onClick:a[19]||(a[19]=()=>{N()})},{default:c(()=>[Ea]),_:1}),e(d).inputsText3?(i(),b("div",Aa,[s("p",null,"inputs.test1:"+E(e(o).test.test1),1),s("p",null,"inputs.test2:"+E(e(o).test.test2),1),s("p",null,"inputs.test3:"+E(e(o).test.test3),1)])):v("v-if",!0),e(d).inputsText3?(i(),w(U,{key:1,modelValue:Oe,"onUpdate:modelValue":a[20]||(a[20]=l=>Oe=l),mode:"preview"})):v("v-if",!0)]),s("div",Sa,[t(e(_),{level:2,class:"mb-3",id:"s4"},{default:c(()=>[Ba]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).inputsText4,"onUpdate:modelValue":a[21]||(a[21]=l=>e(d).inputsText4=l),statusLabel:""},null,8,["modelValue"]),t(e(K),{modelValue:e(o).input0,"onUpdate:modelValue":a[22]||(a[22]=l=>e(o).input0=l)},null,8,["modelValue"]),t(e(K),{modelValue:e(o).input0,"onUpdate:modelValue":a[23]||(a[23]=l=>e(o).input0=l),label:"\u6587\u5B570"},null,8,["modelValue"]),t(e(K),{modelValue:e(o).input2,"onUpdate:modelValue":a[24]||(a[24]=l=>e(o).input2=l),type:"number",label:"\u6578\u5B570"},null,8,["modelValue"]),t(e(K),{modelValue:e(o).input1,"onUpdate:modelValue":a[25]||(a[25]=l=>e(o).input1=l),type:"password",label:"\u5BC6\u78BC0"},null,8,["modelValue"]),t(e(K),{modelValue:e(o).input0,"onUpdate:modelValue":a[26]||(a[26]=l=>e(o).input0=l),green:""},null,8,["modelValue"]),t(e(K),{modelValue:e(o).input0,"onUpdate:modelValue":a[27]||(a[27]=l=>e(o).input0=l),green:"",label:"\u6587\u5B571"},null,8,["modelValue"]),t(e(K),{modelValue:e(o).input2,"onUpdate:modelValue":a[28]||(a[28]=l=>e(o).input2=l),type:"number",green:"",label:"\u6578\u5B571"},null,8,["modelValue"]),t(e(K),{modelValue:e(o).input1,"onUpdate:modelValue":a[29]||(a[29]=l=>e(o).input1=l),green:"",type:"password",label:"\u5BC6\u78BC1"},null,8,["modelValue"]),e(d).inputsText4?(i(),w(U,{key:0,modelValue:Pe,"onUpdate:modelValue":a[30]||(a[30]=l=>Pe=l),mode:"preview"})):v("v-if",!0)]),s("div",Ra,[t(e(_),{level:2,class:"mb-3",id:"s5"},{default:c(()=>[Oa]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).dropdown0,"onUpdate:modelValue":a[31]||(a[31]=l=>e(d).dropdown0=l),statusLabel:""},null,8,["modelValue"]),t(e(Qe),{class:"mr-4",modelValue:e(o).dropdown0,"onUpdate:modelValue":a[32]||(a[32]=l=>e(o).dropdown0=l),options:[{label:"Aaaa",value:1},{label:"Bbbb",value:2},{label:"Gggggeeeeewwww",value:3}],clicked:"",icon:""},null,8,["modelValue"]),e(d).dropdown0?(i(),b("span",Pa,"v-model:"+E(e(o).dropdown0),1)):v("v-if",!0),e(d).dropdown0?(i(),w(U,{key:1,modelValue:Be,"onUpdate:modelValue":a[33]||(a[33]=l=>Be=l),mode:"preview"})):v("v-if",!0)]),s("div",ja,[t(e(_),{level:2,class:"mb-3",id:"s6"},{default:c(()=>[Na]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).dropdown1,"onUpdate:modelValue":a[34]||(a[34]=l=>e(d).dropdown1=l),statusLabel:""},null,8,["modelValue"]),t(e(Qe),{modelValue:e(o).dropdown1,"onUpdate:modelValue":a[35]||(a[35]=l=>e(o).dropdown1=l),options:[{label:"Aaaa",value:1},{label:"Bbbb",value:2},{label:"Gggggeeeeewwww",value:3}],hover:""},null,8,["modelValue"]),e(d).dropdown1?(i(),b("span",Ma,"v-model:"+E(e(o).dropdown1),1)):v("v-if",!0),e(d).dropdown1?(i(),w(U,{key:1,modelValue:Re,"onUpdate:modelValue":a[36]||(a[36]=l=>Re=l),mode:"preview"})):v("v-if",!0)]),s("div",Fa,[t(e(_),{level:2,class:"mb-3",id:"s7"},{default:c(()=>[Ha]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).inputsText0,"onUpdate:modelValue":a[37]||(a[37]=l=>e(d).inputsText0=l),statusLabel:""},null,8,["modelValue"])]),s("div",za,[s("div",qa,[t(e(ae),{class:"mr-4",modelValue:e(o).checked0,"onUpdate:modelValue":a[38]||(a[38]=l=>e(o).checked0=l),label:"\u9078\u98051"},null,8,["modelValue"]),t(e(ae),{class:"mr-4",modelValue:e(o).checked3,"onUpdate:modelValue":a[39]||(a[39]=l=>e(o).checked3=l),label:"\u9078\u98052"},null,8,["modelValue"]),t(e(ae),{class:"mr-4",modelValue:e(o).checked1,"onUpdate:modelValue":a[40]||(a[40]=l=>e(o).checked1=l),label:"\u9078\u98053",disabled:""},null,8,["modelValue"]),t(e(ae),{class:"mr-4",modelValue:e(o).checked2,"onUpdate:modelValue":a[41]||(a[41]=l=>e(o).checked2=l),label:"\u9078\u98054",disabled:""},null,8,["modelValue"])]),e(d).inputsText0?(i(),w(U,{key:0,modelValue:ye,"onUpdate:modelValue":a[42]||(a[42]=l=>ye=l),mode:"preview"})):v("v-if",!0)]),s("div",Wa,[t(e(_),{level:2,class:"mb-3",id:"s8"},{default:c(()=>[Ya]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).inputsText0_1,"onUpdate:modelValue":a[43]||(a[43]=l=>e(d).inputsText0_1=l),statusLabel:""},null,8,["modelValue"])]),s("div",Ja,[t(e(Jt),{class:"mb-3 flex w-full",modelValue:e(o).checkedArr,"onUpdate:modelValue":a[44]||(a[44]=l=>e(o).checkedArr=l)},{default:c(()=>[t(e(ae),{class:"mr-4",value:2,label:"\u9078\u98052"}),t(e(ae),{class:"mr-4",value:4,label:"\u9078\u98054"}),t(e(ae),{class:"mr-4",value:6,label:"\u9078\u98056",disabled:""}),t(e(ae),{class:"mr-4",value:8,label:"\u9078\u98058",disabled:""})]),_:1},8,["modelValue"]),e(d).inputsText0_1?(i(),b("span",Za,"inputs.checkedArr:"+E(e(o).checkedArr),1)):v("v-if",!0),e(d).inputsText0_1?(i(),w(U,{key:1,modelValue:ke,"onUpdate:modelValue":a[45]||(a[45]=l=>ke=l),mode:"preview"})):v("v-if",!0)]),s("div",Ka,[t(e(_),{level:2,class:"mb-3",id:"s9"},{default:c(()=>[Xa]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).inputsText1,"onUpdate:modelValue":a[46]||(a[46]=l=>e(d).inputsText1=l),statusLabel:""},null,8,["modelValue"])]),s("div",Qa,[s("div",es,[t(e(oe),{class:"mr-4",modelValue:e(o).radio0,"onUpdate:modelValue":a[47]||(a[47]=l=>e(o).radio0=l),label:"A"},null,8,["modelValue"]),t(e(oe),{class:"mr-4",modelValue:e(o).radio1,"onUpdate:modelValue":a[48]||(a[48]=l=>e(o).radio1=l),label:"B"},null,8,["modelValue"]),t(e(oe),{class:"mr-4",modelValue:e(o).radio2,"onUpdate:modelValue":a[49]||(a[49]=l=>e(o).radio2=l),disabled:"",label:"C"},null,8,["modelValue"]),t(e(oe),{class:"mr-4",modelValue:e(o).radio3,"onUpdate:modelValue":a[50]||(a[50]=l=>e(o).radio3=l),disabled:"",label:"D"},null,8,["modelValue"])]),e(d).inputsText1?(i(),w(U,{key:0,modelValue:Te,"onUpdate:modelValue":a[51]||(a[51]=l=>Te=l),mode:"preview"})):v("v-if",!0)]),s("div",ts,[t(e(_),{level:2,class:"mb-3",id:"s9-1"},{default:c(()=>[ls]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).inputsText1_1,"onUpdate:modelValue":a[52]||(a[52]=l=>e(d).inputsText1_1=l),statusLabel:""},null,8,["modelValue"])]),s("div",as,[t(e(Wt),{class:"mb-3 flex w-full",modelValue:e(o).radio4,"onUpdate:modelValue":a[53]||(a[53]=l=>e(o).radio4=l)},{default:c(()=>[t(e(oe),{class:"mr-4",value:2,label:"\u9078\u98052"}),t(e(oe),{class:"mr-4",value:4,label:"\u9078\u98054"}),t(e(oe),{class:"mr-4",value:6,label:"\u9078\u98056"}),t(e(oe),{class:"mr-4",value:8,label:"\u9078\u98058",disabled:""})]),_:1},8,["modelValue"]),e(d).inputsText1_1?(i(),w(U,{key:0,modelValue:Ce,"onUpdate:modelValue":a[54]||(a[54]=l=>Ce=l),mode:"preview"})):v("v-if",!0)]),s("div",ss,[t(e(_),{level:2,class:"mb-3",id:"s10"},{default:c(()=>[os]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).inputsText2,"onUpdate:modelValue":a[55]||(a[55]=l=>e(d).inputsText2=l),statusLabel:""},null,8,["modelValue"])]),s("div",ns,[s("div",ds,[t(e(D),{class:"mr-4",modelValue:e(o).switch0,"onUpdate:modelValue":a[56]||(a[56]=l=>e(o).switch0=l)},null,8,["modelValue"]),t(e(D),{class:"mr-4",modelValue:e(o).switch1,"onUpdate:modelValue":a[57]||(a[57]=l=>e(o).switch1=l)},null,8,["modelValue"]),t(e(D),{class:"mr-4",modelValue:e(o).switch2,"onUpdate:modelValue":a[58]||(a[58]=l=>e(o).switch2=l),statusLabel:""},null,8,["modelValue"]),t(e(D),{class:"mr-4",modelValue:e(o).switch3,"onUpdate:modelValue":a[59]||(a[59]=l=>e(o).switch3=l),statusLabel:""},null,8,["modelValue"])]),e(d).inputsText2?(i(),w(U,{key:0,modelValue:Ue,"onUpdate:modelValue":a[60]||(a[60]=l=>Ue=l),mode:"preview"})):v("v-if",!0)]),s("div",is,[t(e(_),{level:1,class:"mb-3"},{default:c(()=>[us]),_:1})]),s("div",rs,[s("div",cs,[s("div",ms,[t(e(_),{level:2,class:"mb-3",id:"s11"},{default:c(()=>[ps]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).loadText,"onUpdate:modelValue":a[61]||(a[61]=l=>e(d).loadText=l),statusLabel:""},null,8,["modelValue"]),t(e(L),{pill:"",onClick:W},{default:c(()=>[fs]),_:1})])]),e(d).loadText?(i(),w(U,{key:0,modelValue:_e,"onUpdate:modelValue":a[62]||(a[62]=l=>_e=l),mode:"preview"})):v("v-if",!0),s("div",gs,[t(e(_),{level:2,class:"mb-3",id:"s12"},{default:c(()=>[vs]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).loadingText0,"onUpdate:modelValue":a[63]||(a[63]=l=>e(d).loadingText0=l),statusLabel:""},null,8,["modelValue"]),t(e(lt)),e(d).loadingText0?(i(),w(U,{key:0,modelValue:Le,"onUpdate:modelValue":a[64]||(a[64]=l=>Le=l),mode:"preview"})):v("v-if",!0)]),s("div",bs,[t(e(_),{level:2,class:"mb-3",id:"s13"},{default:c(()=>[hs]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).loadingText1,"onUpdate:modelValue":a[65]||(a[65]=l=>e(d).loadingText1=l),statusLabel:""},null,8,["modelValue"])]),s("div",_s,[s("div",ws,[t(e(re),{class:"mr-2"}),t(e(re),{class:"mr-2",percent:20}),t(e(re),{class:"mr-2",percent:80}),t(e(re),{class:"mr-2",percent:0,auto:""})]),e(d).loadingText1?(i(),w(U,{key:0,modelValue:$e,"onUpdate:modelValue":a[66]||(a[66]=l=>$e=l),mode:"preview"})):v("v-if",!0)]),s("div",xs,[t(e(_),{level:2,class:"mb-3",id:"s14"},{default:c(()=>[Vs]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).loadingText2,"onUpdate:modelValue":a[67]||(a[67]=l=>e(d).loadingText2=l),statusLabel:""},null,8,["modelValue"])]),s("div",ys,[s("div",ks,[t(e(fe),{class:"mr-2"}),t(e(fe),{class:"mr-2",percent:20}),t(e(fe),{class:"mr-2",percent:100}),t(e(fe),{class:"mr-2",percent:0,auto:!0})]),e(d).loadingText2?(i(),w(U,{key:0,modelValue:De,"onUpdate:modelValue":a[68]||(a[68]=l=>De=l),mode:"preview"})):v("v-if",!0)])]),s("div",Ts,[t(e(_),{level:1,class:"mb-3"},{default:c(()=>[Cs]),_:1})]),s("div",Us,[t(e(_),{level:2,class:"mb-3",id:"s15"},{default:c(()=>[Ls]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).msgText,"onUpdate:modelValue":a[69]||(a[69]=l=>e(d).msgText=l),statusLabel:""},null,8,["modelValue"]),s("div",$s,[s("span",Ds,[t(e(L),{pill:"",type:"second",onClick:a[70]||(a[70]=()=>{Z("info")})},{default:c(()=>[Is]),_:1})]),s("span",Gs,[t(e(L),{pill:"",type:"yellow",onClick:a[71]||(a[71]=()=>{Z("warning")})},{default:c(()=>[Es]),_:1})]),s("span",As,[t(e(L),{pill:"",type:"red",onClick:a[72]||(a[72]=()=>{Z("error")})},{default:c(()=>[Ss]),_:1})])]),e(d).msgText?(i(),w(U,{key:0,modelValue:we,"onUpdate:modelValue":a[73]||(a[73]=l=>we=l),mode:"preview"})):v("v-if",!0)]),s("div",Bs,[t(e(_),{level:2,class:"mb-3",id:"s15b"},{default:c(()=>[Rs]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).msgToastText,"onUpdate:modelValue":a[74]||(a[74]=l=>e(d).msgToastText=l),statusLabel:""},null,8,["modelValue"]),s("div",Os,[s("span",Ps,[t(e(L),{pill:"",type:"second",onClick:a[75]||(a[75]=()=>{ue()})},{default:c(()=>[js]),_:1})])]),e(d).msgToastText?(i(),w(U,{key:0,modelValue:xe,"onUpdate:modelValue":a[76]||(a[76]=l=>xe=l),mode:"preview"})):v("v-if",!0)]),s("div",Ns,[t(e(_),{level:2,class:"mb-3",id:"s15c"},{default:c(()=>[Ms]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).dialogText,"onUpdate:modelValue":a[77]||(a[77]=l=>e(d).dialogText=l),statusLabel:""},null,8,["modelValue"]),s("div",Fs,[t(e(et),{title:e(F).title,modelValue:e(F).show,"onUpdate:modelValue":a[78]||(a[78]=l=>e(F).show=l)},{default:c(()=>[Hs]),_:1},8,["title","modelValue"]),t(e(et),{modelValue:e(F).show2,"onUpdate:modelValue":a[79]||(a[79]=l=>e(F).show2=l),mode:"delete"},{default:c(()=>[zs]),_:1},8,["modelValue"]),s("span",qs,[t(e(L),{pill:"",type:"second",onClick:a[80]||(a[80]=()=>{q(1)})},{default:c(()=>[Ws]),_:1})]),s("span",Ys,[t(e(L),{pill:"",type:"red",onClick:a[81]||(a[81]=()=>{q(2)})},{default:c(()=>[Js]),_:1})])]),e(d).dialogText?(i(),b(z,{key:0},[e(d).dialogText?(i(),w(U,{key:0,modelValue:Ve,"onUpdate:modelValue":a[82]||(a[82]=l=>Ve=l),mode:"preview"})):v("v-if",!0)],2112)):v("v-if",!0)]),s("div",Zs,[t(e(_),{level:1,class:"mb-3"},{default:c(()=>[Ks]),_:1})]),s("div",Xs,[t(e(_),{level:2,class:"mb-3",id:"s16"},{default:c(()=>[Qs]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).titleText,"onUpdate:modelValue":a[83]||(a[83]=l=>e(d).titleText=l),statusLabel:""},null,8,["modelValue"]),t(e(_),{level:1,class:"mb-4"},{default:c(()=>[eo]),_:1}),t(e(_),{level:2,class:"mb-4"},{default:c(()=>[to]),_:1}),t(e(_),{level:3,class:"mb-4"},{default:c(()=>[lo]),_:1}),t(e(_),{class:"mb-4"},{default:c(()=>[ao]),_:1}),e(d).titleText?(i(),w(U,{key:0,modelValue:Ie,"onUpdate:modelValue":a[84]||(a[84]=l=>Ie=l),mode:"preview"})):v("v-if",!0)]),s("div",so,[t(e(_),{level:1,class:"mb-3"},{default:c(()=>[oo]),_:1})]),s("div",no,[s("div",io,[t(e(_),{level:2,class:"mb-3",id:"s17"},{default:c(()=>[uo]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).buttonText0,"onUpdate:modelValue":a[85]||(a[85]=l=>e(d).buttonText0=l),statusLabel:""},null,8,["modelValue"]),s("div",ro,[t(e(L),{pill:""},{default:c(()=>[co]),_:1}),t(e(L),{pill:"",type:"yellow"},{default:c(()=>[mo]),_:1}),t(e(L),{pill:"",type:"red"},{default:c(()=>[po]),_:1}),t(e(L),{pill:"",type:"white"},{default:c(()=>[fo]),_:1})]),e(d).buttonText0?(i(),w(U,{key:0,modelValue:Ge,"onUpdate:modelValue":a[86]||(a[86]=l=>Ge=l),mode:"preview"})):v("v-if",!0)]),s("div",go,[t(e(_),{level:2,class:"mb-3",id:"s18"},{default:c(()=>[vo]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).buttonText1,"onUpdate:modelValue":a[87]||(a[87]=l=>e(d).buttonText1=l),statusLabel:""},null,8,["modelValue"]),s("div",bo,[t(e(L),{flat:""},{default:c(()=>[ho]),_:1}),t(e(L),{flat:"",type:"yellow"},{default:c(()=>[_o]),_:1}),t(e(L),{flat:"",type:"red"},{default:c(()=>[wo]),_:1}),t(e(L),{flat:"",type:"white"},{default:c(()=>[xo]),_:1})]),e(d).buttonText1?(i(),w(U,{key:0,modelValue:Ee,"onUpdate:modelValue":a[88]||(a[88]=l=>Ee=l),mode:"preview"})):v("v-if",!0)]),s("div",Vo,[t(e(_),{level:2,class:"mb-3",id:"s19"},{default:c(()=>[yo]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).buttonText2,"onUpdate:modelValue":a[89]||(a[89]=l=>e(d).buttonText2=l),statusLabel:""},null,8,["modelValue"]),s("div",ko,[t(e(L),{flat:""},{default:c(()=>[t(e(A),{name:"chevronLeft",class:"w-8"}),To]),_:1}),t(e(L),{flat:"",type:"yellow"},{default:c(()=>[t(e(A),{name:"chevronLeft",class:"w-8"}),Co]),_:1}),t(e(L),{flat:"",type:"red"},{default:c(()=>[t(e(A),{name:"chevronLeft",class:"w-8"}),Uo]),_:1}),t(e(L),{flat:"",type:"white"},{default:c(()=>[t(e(A),{name:"chevronLeft",class:"w-8"}),Lo]),_:1})]),s("div",$o,[t(e(L),{flat:""},{default:c(()=>[t(e(A),{name:"chevronRight",class:"w-8"}),Do]),_:1}),t(e(L),{flat:"",type:"yellow"},{default:c(()=>[t(e(A),{name:"chevronRight",class:"w-8"}),Io]),_:1}),t(e(L),{flat:"",type:"red"},{default:c(()=>[t(e(A),{name:"chevronRight",class:"w-8"}),Go]),_:1}),t(e(L),{flat:"",type:"white"},{default:c(()=>[t(e(A),{name:"chevronRight",class:"w-8"}),Eo]),_:1})]),e(d).buttonText2?(i(),w(U,{key:0,modelValue:Ae,"onUpdate:modelValue":a[90]||(a[90]=l=>Ae=l),mode:"preview"})):v("v-if",!0)]),s("div",Ao,[t(e(_),{level:2,class:"mb-3",id:"s20"},{default:c(()=>[So]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).buttonText3,"onUpdate:modelValue":a[91]||(a[91]=l=>e(d).buttonText3=l),statusLabel:""},null,8,["modelValue"]),s("div",Bo,[t(e(L),{round:""},{default:c(()=>[Ro]),_:1}),t(e(L),{round:"",type:"yellow"},{default:c(()=>[Oo]),_:1}),t(e(L),{round:"",type:"red"},{default:c(()=>[Po]),_:1}),t(e(L),{round:"",type:"black"},{default:c(()=>[jo]),_:1}),t(e(L),{round:"",type:"white"},{default:c(()=>[No]),_:1})]),t(e(_),{level:2,class:"mb-3",id:"s20"},{default:c(()=>[Mo]),_:1}),s("div",Fo,[t(e(L),{round:"",type:"black",icon:"file",class:"mr-4"}),t(e(at))]),e(d).buttonText3?(i(),w(U,{key:0,modelValue:Se,"onUpdate:modelValue":a[92]||(a[92]=l=>Se=l),mode:"preview"})):v("v-if",!0)])]),s("div",Ho,[t(e(_),{level:1,class:"mb-3",id:"s21"},{default:c(()=>[zo]),_:1})]),s("div",qo,[(i(),b(z,null,se(C,(l,be)=>s("span",{class:"flex justify-start mb-2",key:l},[be%2==0?(i(),b(z,{key:0},[s("span",Wo,[t(e(A),{name:l,class:"text-main",size:"sm"},null,8,["name"]),t(e(A),{name:l,class:"text-main",size:"md"},null,8,["name"]),t(e(A),{name:l,class:"text-main",size:"lg"},null,8,["name"])]),s("span",Yo,E(`<g-icons name="${l}" size="sm | md | lg" />`),1)],64)):(i(),b(z,{key:1},[s("span",Jo,[t(e(A),{name:l,class:"text-second w-8",size:"sm"},null,8,["name"]),t(e(A),{name:l,class:"text-second w-8",size:"md"},null,8,["name"]),t(e(A),{name:l,class:"text-second w-8",size:"lg"},null,8,["name"])]),s("span",Zo,E(`<g-icons name="${l}" size="sm | md | lg" />`),1)],64))])),64))]),s("div",Ko,[t(e(_),{level:1,class:"mb-3",id:"s22"},{default:c(()=>[Xo]),_:1})]),s("div",Qo,[t(e(_),{level:2,class:"mb-3"},{default:c(()=>[en]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).tagsText,"onUpdate:modelValue":a[93]||(a[93]=l=>e(d).tagsText=l),statusLabel:""},null,8,["modelValue"]),s("div",tn,[t(e(H),{type:"default",border:""}),t(e(H),{type:"second",border:""}),t(e(H),{type:"warning",border:""}),t(e(H),{type:"danger",border:""})]),t(e(_),{level:2,class:"mb-3"},{default:c(()=>[ln]),_:1}),s("div",an,[t(e(H),{type:"default"}),t(e(H),{type:"second"}),t(e(H),{type:"warning"}),t(e(H),{type:"danger"})]),t(e(_),{level:2,class:"mb-3"},{default:c(()=>[sn]),_:1}),s("div",on,[t(e(H),{type:"default",dot:""}),t(e(H),{type:"second",dot:""}),t(e(H),{type:"warning",dot:""}),t(e(H),{type:"danger",dot:""})]),t(e(_),{level:2,class:"mb-3"},{default:c(()=>[nn]),_:1}),s("div",dn,[t(e(H),{type:"default",dot:"",label:"\u8A02\u55AE"}),t(e(H),{type:"second",border:"",dot:"",label:"\u51FA\u8CA8"}),t(e(H),{type:"warning",dot:"",label:"\u8B66\u544A"}),t(e(H),{type:"danger",border:"",dot:"",label:"\u932F\u8AA4"})]),t(e(_),{level:2,class:"mb-3"},{default:c(()=>[un]),_:1}),s("div",rn,[t(e(H),{type:"activity",border:""})]),e(d).tagsText?(i(),w(U,{key:0,modelValue:Ne,"onUpdate:modelValue":a[94]||(a[94]=l=>Ne=l),mode:"preview"})):v("v-if",!0)]),s("div",cn,[t(e(_),{level:1,class:"mb-3"},{default:c(()=>[mn]),_:1})]),s("div",pn,[t(e(_),{level:2,class:"mb-3",id:"s23"},{default:c(()=>[fn]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).tableText,"onUpdate:modelValue":a[95]||(a[95]=l=>e(d).tableText=l),statusLabel:""},null,8,["modelValue"]),t(e(hl),{columns:e(h).columns,data:e(h).data,height:"450",name:"products",rowClick:"",isLoading:e(h).isLoading},{tags:c(({row:l})=>[s("div",gn,[t(e(H),{type:"warning",border:"",label:"\u4E0A\u67B6\u4E2D"}),t(e(H),{type:"second",border:"",dot:"",label:"\u53EF\u51FA\u8CA8"})])]),btns:c(({row:l})=>[s("div",vn,[t(e(L),{flat:"",onClick:()=>{Y(l)}},{default:c(()=>[bn]),_:2},1032,["onClick"]),t(e(L),{flat:"",type:"red",onClick:()=>{Y(l)}},{default:c(()=>[hn]),_:2},1032,["onClick"])])]),_:1},8,["columns","data","isLoading"]),t(e(L),{class:"mb-4 mt-4",onClick:a[96]||(a[96]=()=>{P()})},{default:c(()=>[_n]),_:1}),t(e(L),{class:"mb-4 mt-4",onClick:a[97]||(a[97]=()=>{k()})},{default:c(()=>[wn]),_:1}),e(d).tableText?(i(),w(U,{key:0,modelValue:Me,"onUpdate:modelValue":a[98]||(a[98]=l=>Me=l),mode:"preview"})):v("v-if",!0),e(d).tableText?(i(),w(U,{key:1,modelValue:Fe,"onUpdate:modelValue":a[99]||(a[99]=l=>Fe=l),mode:"preview"})):v("v-if",!0)]),s("div",xn,[t(e(_),{level:2,class:"mb-3",id:"s24"},{default:c(()=>[Vn]),_:1}),t(e(D),{class:"absolute right-0 top-0",modelValue:e(d).paginationText,"onUpdate:modelValue":a[100]||(a[100]=l=>e(d).paginationText=l),statusLabel:""},null,8,["modelValue"]),t(e(Sl),{pageInfo:{currentPage:1,total:200,perPageNums:15},onUpdatePage:$}),e(d).paginationText?(i(),b("span",yn," curPage:"+E(O.value),1)):v("v-if",!0),e(d).paginationText?(i(),w(U,{key:1,modelValue:We,"onUpdate:modelValue":a[101]||(a[101]=l=>We=l),mode:"preview"})):v("v-if",!0),e(d).paginationText?(i(),w(U,{key:2,modelValue:Ye,"onUpdate:modelValue":a[102]||(a[102]=l=>Ye=l),mode:"preview"})):v("v-if",!0)])],544),s("div",kn,[s("div",Tn,[(i(),b(z,null,se(m,l=>s("p",{key:l.id,id:"r-"+l.id,class:R(["px-4 py-2 my-2 cursor-pointer",r.value==l.id?"current":""]),onClick:()=>{x(l.id)}},E(l.name),11,Cn)),64))])])]),t(e(kt)),t(e(_t)),t(e(Xl),{text:"\u5132\u5B58\u5B8C\u6210~!"})],64)}}};var En=B(Un,[["__scopeId","data-v-69b21525"],["__file","D:/frontEnd/gt-UI/src/views/VGtSelf.vue"]]);export{En as default};
