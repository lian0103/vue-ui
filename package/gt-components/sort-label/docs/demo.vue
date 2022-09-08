<script setup>
import { reactive } from 'vue';

const inputs = reactive({
  curSortLabelValue: 'ASC',
});
</script>

<template>
  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="mb-3">排序標籤</g-title>
    <g-sort-label
      v-model="inputs.curSortLabelValue"
      labelName="日期"
      :options="[
        {
          label: '遞增',
          value: 'ASC',
        },
        {
          label: '遞減',
          value: 'DESC',
        },
        {
          label: '無',
          value: 'none',
        },
      ]"
    />
  </div>
</template>
