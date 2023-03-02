<script setup>
import { ref, onMounted, computed } from 'vue';

const { percent, auto } = defineProps({
    percent: {
        type: Number,
        default: 0,
    },
    auto: {
        type: Boolean,
        default: false,
    },
});
const percentNum = ref(percent);
const styleComputed = computed(() => {
    // console.log('percentNum', percentNum);
    return {
        background: `conic-gradient(#55585e 0 ${percentNum.value}%, #aaa 0 100%)`,
    };
});

onMounted(() => {
    if (auto) {
        const time = setInterval(() => {
            percentNum.value = percentNum.value + 10;
            if (percentNum.value > 100) {
                percentNum.value = 0;
            }
        }, 500);
    }
});
</script>
<script>
export default {
    name: 'GDownloadIcon',
};
</script>
<template>
    <div class="gt-download-icon">
        <div class="pie" :style="styleComputed"></div>
        <div class="inner" :class="percentNum >= 100 ? 'completed' : ''"></div>
        <div class="iconBox">
            <g-icon v-if="percentNum < 100" :style="{left:'10px'}" classes="fas fa-long-arrow-alt-down" />
            <g-icon class="white" v-if="percentNum >= 100" classes="fas fa-check" />
        </div>
    </div>
</template>
