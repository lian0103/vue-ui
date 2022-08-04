<script setup>
import {ref , onMounted , computed  } from 'vue';
import demo from './demo.vue'

const source = ref(null);
const sourceComputed = computed(()=>{
    return ` 
\`\`\` javascript 
${source.value}  
\`\`\`
`;
})

onMounted(async() => {
    const isDev = import.meta.env.MODE === 'development';
    source.value = isDev ? (await import(/* @vite-ignore */ `./demo.vue?raw`)).default : await fetch("/vue-ui/packages/GButton/docs/demo.vue").then(res=>res.text()); 
})
</script>

<demo />

<!-- 正文开始 -->

# 按鈕/GButton

<v-md-editor v-model="sourceComputed" mode="preview" />
