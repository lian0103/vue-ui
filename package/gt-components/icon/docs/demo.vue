<script setup>
import { ref } from 'vue';

const customIconClasses = `寫法: <g-icon classes="fas fa-vote-yea" />。渲染結果:<i class="fas fa-vote-yea"></i>`;

const classArr = ['fas fa-vote-yea', 'fas fa-user', 'far fa-file-code'];
const classRef = ref(classArr[0]);

const handleIconClassChange = () => {
    let index = classArr.findIndex((item) => item == classRef.value);
    // console.log(index);
    classRef.value = index + 1 <= classArr.length - 1 ? classArr[index + 1] : classArr[0];
};
</script>

<template>
    <g-title :level="2" class="mt-3 w-full">classes (fontawesome v5)</g-title>
    <a class="text-purple-400" href="https://fontawesome.com/v5/search" target="_blank"> icon 搜尋</a>

    <div class="flex">
        <g-icon class="text-purple-600" classes="fas fa-comment-dots" />
        <g-icon class="text-purple-600" classes="fas fa-socks" />
    </div>


    <g-button @click="handleIconClassChange" :width="100" class="mt-3">資料更換</g-button>
    <div class="my-2">:classes = {{ classRef }}</div>
    <div class="my-2">
        <g-icon :classes="classRef" />
    </div>
    <div class="text-red-600 my-2">{{ customIconClasses }}</div>
</template>
