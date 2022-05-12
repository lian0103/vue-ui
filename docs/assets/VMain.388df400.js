import{_ as l,o as A,c as V,a as s,t as p,r as i,b as t,w as e,d,p as W,e as R,u as _,f as h,g as f,h as g,E as T,i as w,j as I}from"./index.3b0c34da.js";import{G as E}from"./GIcons.2bf8c19f.js";import{G as F}from"./GTitle.38c2b121.js";/* empty css                                                            *//* empty css               */var H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL7SURBVHgBxVaxctNAEN2VTY07xk2ioaJUXKXAQfkCJyWV7ZKK/IGTL4B8geWODqekikMYJlUQX4CSJpROFwZZy9uTZAVbsmQmwJuRfTrd7dt7e3t7TGvAGbq2xbPXaPbwNITYZ5Hjy/65t4YZ4qoDE8JTNO2cz95l77xPFWFVHsizQQGhotcatnv0kKRYZYNiSQshRHtUEVxAYjPPhvjo4FUJp8l/Gcy4slhzHiGk/FKRZDWYDy+7H48Wu5fkrXH4/kEIFSKHzvC5u5JUVwlpHHpAgMBd7Kv//hraZVkUiezef2fiHjN1Cycwb9KyIzF0h1psdagEfv/ThJkH+ljENpMEq8bDKWdRYishTDaPHFAFQAuXjWxil40VEsdiPm2NdgZpn5F3deLLGDTTIqMR0gOeexmJccheNmM21ZkqVVNZmeVdoVGhV5DoFrM02LfNvQ0XcXKNHQTTIvmh/fpEFI3Q00R37mZESOhmfH2ClYZO2eYBXRfE7pIRlZizfksokFV2knBAmXpA/xh1vz8Jtrz2hHPyKYVIbV/obn5gWPzoW9Jcqi5bw7ZbbIdH+m90Tc7aUy6uInOAhFteO1XRg6UrSDygcowxd984rT+6WqxmV4RGc6+Ignjnrgedt2BnCseOUkJFaRE3OUzhAUZuwsJVRPW3SLFU3jFOqGPkoTmRIom+Ej3ysIhpPHfb9vsXwaLNyjeHxIFGUoHszEJ+JVmFWtWBSljjSK8rzxY+uc3O5u3NyfVFRVNrXVeGeqRpW+MGWbPVMb1xRjvdqrYqrdTR+w/LNpoB4uGLhC/9/udxs7PBEgcowMlkP+k8/fD9JLgrs7d2TMnka93OesMgb7P8EWlMMHMtphco7DjEzRFWeKPQexF+p7gbnUVEEz3YK5Nq7TP1MrmUJfkKWTmIrYse7verTgM7+LHMyxw7HDun4yeRzI4RCj+XtBXHrRPnonr9c7KubJnjqpIWEoEDloPiIth4o3T1rAkcx6jup0n9N5DdHsKA/gd+ASSiOLxOK22uAAAAAElFTkSuQmCC",S="data:image/png;base64,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";const U=o=>(W("data-v-09104ff1"),o=o(),R(),o),Y={class:"gt-wrapper"},k={class:"gt-sidebar"},b={class:"flex flex-col"},M={class:"gt-headline"},j={class:"gt-menuBox"},K=U(()=>s("div",{class:"gt-bottomLogo"},[s("img",{src:H,alt:""}),s("img",{src:S,alt:""})],-1)),B={class:"gt-header"},N={class:"w:1/3"},O={class:"gt-content"},Q={props:{headText:{type:String,default:""},title:{type:String,default:""}},setup(o){return(n,u)=>(A(),V("div",Y,[s("div",k,[s("div",b,[s("div",M,p(o.headText),1),s("div",j,[i(n.$slots,"sidebar",{},void 0,!0)]),K])]),s("div",B,[s("div",N,[t(F,{level:1},{default:e(()=>[d(p(o.title),1)]),_:1})]),i(n.$slots,"header",{},void 0,!0)]),s("div",O,[i(n.$slots,"content",{},void 0,!0)])]))}};var G=l(Q,[["__scopeId","data-v-09104ff1"],["__file","D:/frontEnd/gt-UI/src/components/GLayout.vue"]]);const P=s("span",null,"\u6587\u4EF6",-1),J=d("\u4F7F\u7528\u8AAA\u660E"),C=s("span",null,"\u5143\u4EF6",-1),Z=d("ElementPlus"),q=d(" Quasar"),y=d(" GT\u958B\u767C"),z={setup(o){const n=_();return(u,x)=>{const r=E,a=T,c=h("router-link"),m=w,v=I;return A(),f(v,{"default-active":g(n).currentRoute._value.meta.idx},{default:e(()=>[t(m,{index:"1"},{title:e(()=>[t(r,{name:"calendar",class:"w-6 mr-2"}),P]),default:e(()=>[t(c,{to:"/doc#dev"},{default:e(()=>[t(a,{index:"1-1"},{default:e(()=>[J]),_:1})]),_:1})]),_:1}),t(m,{index:"2"},{title:e(()=>[t(r,{name:"download",class:"w-6 mr-2"}),C]),default:e(()=>[t(c,{to:"/elementPlus"},{default:e(()=>[t(a,{index:"2-1"},{default:e(()=>[Z]),_:1})]),_:1}),t(c,{to:"/quasar"},{default:e(()=>[t(a,{index:"2-2"},{default:e(()=>[q]),_:1})]),_:1}),t(c,{to:"/gt-self"},{default:e(()=>[t(a,{index:"2-3"},{default:e(()=>[y]),_:1})]),_:1})]),_:1})]),_:1},8,["default-active"])}}};var X=l(z,[["__file","D:/frontEnd/gt-UI/src/views/VMenu.vue"]]);const D={class:"w-1/4 flex justify-center items-center px-4"},L={class:"flex leading-8 mr-4 cursor-pointer"},$=s("span",null,"\u641C\u5C0B",-1),ee={class:"cursor-pointer"},te={setup(o){const n=_();return(u,x)=>{const r=E,a=h("router-view"),c=G;return A(),f(c,{headText:"Great Tree UI",title:g(n).currentRoute._value.meta.title},{sidebar:e(()=>[t(X,{class:"gt-menu"})]),header:e(()=>[s("div",D,[s("span",L,[t(r,{name:"search",class:"text-main w-8"}),$]),s("span",ee,[t(r,{name:"calendar",class:"text-main w-8"})])])]),content:e(()=>[t(a,{name:"mainView"})]),_:1},8,["title"])}}};var re=l(te,[["__file","D:/frontEnd/gt-UI/src/views/VMain.vue"]]);export{re as default};
