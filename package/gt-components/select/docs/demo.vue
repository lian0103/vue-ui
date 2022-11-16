<script setup>
import { ref } from 'vue';
const val = ref(0);
const val2 = ref([0]);
const val3 = ref(['1']);
const val4 = ref('123');
</script>
<template>
    <div class="w64box">
    <g-title :level="2" class="mb-3">bindResult index</g-title>
    current:{{ val }}
    <g-select v-model="val">
        <g-option label="123" value="1" />
        <g-option label="456" value="2" />
    </g-select>
    <g-divider />
    <g-title :level="2" class="mb-3">bindResult index & multiple</g-title>
    current:{{ val2 }}
    <g-select v-model="val2" multiple>
        <g-option label="123" value="1" />
        <g-option label="456" value="2" />
        <g-option label="789" value="3" />
    </g-select>
    <g-divider />
    <g-title :level="2" class="mb-3">bindResult value & multiple</g-title>
    current:{{ val3 }}
    <g-select v-model="val3" multiple bindResult="value">
        <g-option label="123" value="1" />
        <g-option label="456" value="2" />
        <g-option label="789" value="3" />
    </g-select>
    <g-divider />
    <g-title :level="2" class="mb-3">bindResult label</g-title>
    current:{{ val4 }}
    <g-select v-model="val4" bindResult="label">
        <g-option label="123" value="1" />
        <g-option label="456" value="2" />
        <g-option label="789" value="3" />
    </g-select>
</div>
</template>

<style lang="scss">
.w64box{
    @apply w-64;
}
</style>