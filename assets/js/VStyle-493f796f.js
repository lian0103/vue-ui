import{aH as a,az as s,_ as d,$ as l,a6 as c}from"./@vue-2b1be6ab.js";const n={class:"pb-8 flex justify-center items-center flex-col"},i={class:"mb-8 w-full md:w-3/4 mx-auto"},_={__name:"VStyle",setup(m){const e=`

# \u5171\u7528\u6A23\u5F0F

## scroll
\`\`\`css
&::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #d9d9d9;
    border-radius: 5px;
    }
&::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #aaaaaa;
    &:hover {
        background-color: #666666;
    }
}
\`\`\`

`;return(p,o)=>{const r=a("v-md-editor");return s(),d("div",n,[l("div",i,[c(r,{modelValue:e,"onUpdate:modelValue":o[0]||(o[0]=t=>e=t),mode:"preview"})])])}}};export{_ as default};
