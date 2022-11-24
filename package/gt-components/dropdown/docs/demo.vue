<script setup>
import { reactive } from 'vue';

const inputs = reactive({
    dropdown0: 2,
    dropdown1: 3,
});

const options = [
    { label: 'Aaaa', value: 1 },
    { label: 'Bbbb', value: 2 },
    { label: 'Ggggwwwwwwwsssswww', value: 3 },
];

const handleClick = (e) => {
    console.log('click', e);
};
</script>

<template>
    <div class="w-full mx-auto mb-6 relative">
        <g-title :level="2" class="mb-3">with slot dropdownItem</g-title>
        <g-dropdown class="mr-4" v-model="inputs.dropdown0">
            <g-dropdown-item
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                @itemClick="handleClick"
            />
        </g-dropdown>
        <g-divider />

        <g-title :level="2" class="mb-3">下拉選項點擊模式</g-title>
        <g-dropdown class="mr-4" v-model="inputs.dropdown0" :options="options" />
        <g-divider />

        <g-title :level="2" class="mb-3">下拉選項停留模式</g-title>
        <g-dropdown v-model="inputs.dropdown1" :options="options" icon hover />

        <g-divider />
        <g-title :level="2" class="mb-3">width 180</g-title>
        <div class="w180">
            <g-dropdown v-model="inputs.dropdown1" :options="options" icon hover />
        </div>
    </div>
</template>

<style lang="scss">
.w180 {
    width: 180px;
}
</style>
