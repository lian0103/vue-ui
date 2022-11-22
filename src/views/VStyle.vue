<script setup>
const filesText = `

# 共用樣式

## scroll
\`\`\`css
&::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #d9d9d9;
    border-radius: 5px;
    }
&::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #aaaaaa;
    &:hover {
        background-color: #666666;
    }
}
\`\`\`

`;
</script>

<template>
  <div class="pb-8 flex justify-center items-center flex-col">
    <div class="mb-8 w-full md:w-3/4 mx-auto">
      <v-md-editor v-model="filesText" mode="preview"></v-md-editor>
    </div>
  </div>
</template>

<style lang="scss"></style>
