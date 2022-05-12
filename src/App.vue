<script setup></script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
* {
  font-family: 'Noto Sans TC';
}

body {
  font-size: 16px;
}

div > p {
  margin-bottom: 10px;
  padding: 4px 10px;
}

.redText {
  @apply text-red-500;
}

.paragraphHead {
  @apply w-full pl-14 py-8 text-left;
}

/* width */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #edf2f7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 100vh;
  border: 1px solid #edf2f7;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}
</style>
