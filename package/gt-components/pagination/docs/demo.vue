<script setup>
const handleUpdatePage = (val) => {
    console.log(val);
};
</script>

<template>
    <div class="w-full mx-auto mb-6">
        <g-title :level="2" class="mb-3">分頁選擇</g-title>
        <g-pagination :pageInfo="{ currentPage: 2, total: 600, perPageNums: 100 }" @updatePage="handleUpdatePage" />
        <g-divider />
        <g-title :level="2"> underline </g-title>
        <g-pagination
            :pageInfo="{ currentPage: 1, total: 60, perPageNums: 15 }"
            @updatePage="handleUpdatePage"
            :underline="true"
        />

        <g-divider />
        <g-title :level="2"> gap 10</g-title>
        <g-pagination
            :pageInfo="{ currentPage: 20, total: 6000, perPageNums: 40 }"
            @updatePage="handleUpdatePage"
            :gap="10"
        />
    </div>
</template>
