<template>
  <div class="w-full mx-auto border-2">
    <g-layout class="layout" headText="Great Tree UI" title="hello">
      <template #sidebar> menu </template>
      <template #header>
        <div class="w-1/4 flex justify-center items-center px-4">
          <span>v10</span>
        </div>
      </template>
      <template #content> <div class="bg-purple-400 h-64 p-6">content</div> </template>
    </g-layout>
  </div>
</template>
