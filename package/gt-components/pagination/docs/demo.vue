<script setup>
const handleUpdatePage = (val) => {console.log(val)};
</script>

<template>
  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="mb-3">分頁選擇</g-title>
    <g-pagination
      :pageInfo="{ currentPage: 1, total: 200, perPageNums: 15 }"
      @updatePage="handleUpdatePage"
    />
  </div>
</template>
