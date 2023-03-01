<script setup>
import { ref } from 'vue';
const address = ref('');
</script>
<template>
    <div>
        <g-title :level="1" class="mb-3">台灣縣市/行政區 地址</g-title>
        <p class="py-4">address:{{ address }}</p>
        <g-address-select v-model="address" />
    </div>
</template>

<style lang="scss"></style>
