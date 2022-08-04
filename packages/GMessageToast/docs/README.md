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
})
</script>

<demo />


<!-- 正文开始 -->

# 通知-toast/GMessageToast 

<v-md-editor v-model="sourceComputed" mode="preview" />
