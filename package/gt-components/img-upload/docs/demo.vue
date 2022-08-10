<script setup>
const handleFile = (file) => {
  // console.log(file);
};
</script>

<template>
  <g-img-upload @file="handleFile" />
</template>
