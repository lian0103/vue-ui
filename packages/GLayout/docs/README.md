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
    source.value = (await import(`./demo.vue?raw`)).default;
    // console.log(source.value)
})
</script>

<demo />

<!-- 正文开始 -->

# 後台模板/GLayout 

<v-md-editor v-model="sourceComputed" mode="preview" />