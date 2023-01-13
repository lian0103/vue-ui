<script>
export default {
    name: 'GIcon',
};
</script>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
    name: {
        type: String,
        default: null,
    },
    classes: {
        type: String,
    },
    size: {
        type: String,
        default: 'md',
    },
    style: {
        type: Object,
        default: () => {
            return {};
        },
    },
    fill: {
        type: String,
        default: '#55585E',
    },
});
const componentKey = ref(0);

const classesComputed = computed(() => {
    let arr = [];

    if (props.name) {
        arr.push('gt-icon');

        if (props.size) {
            arr.push(`gt-icon-${props.size}`);
        }
    }

    if (props.classes) {
        arr.push(props.classes);
    }
    return arr;
});

watch(
    () => props.classes,
    (val) => {
        componentKey.value = componentKey.value + 1;
    }
);

</script>

<template>
    <div class="gt-icon-wrapper" :key="componentKey">
        <i :style="style" :class="classesComputed" />
    </div>
</template>
