<script setup>
const icons = [
  'up',
  'arrow-down',
  'arrow-left',
  'calendar',
  'check',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'circle',
  'down',
  'download',
  'ellipsis',
  'plus',
  'search',
  'sequence',
  'trash',
  'x',
];
</script>

<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <g-title :level="3" class="mb-3">sm:14px;md:24px;lg:36px;</g-title>
    <span
      class="flex justify-start mb-2"
      v-for="(item, idx) in icons"
      :key="item"
    >
      <template v-if="idx % 2 == 0">
        <div class="flex justify-center items-center leading-8 h-16">
          <g-icon :name="item" class="text-main" size="sm" />
          <g-icon :name="item" class="text-main" size="md" />
          <g-icon :name="item" class="text-main" size="lg" />
          <span class="text-gray-600 leading-10">
            {{ `<g-icon name="${item}" size="sm | md | lg" />`}}
          </span>
        </div>
      </template>
      <template v-else>
        <div class="flex justify-center items-center leading-8 h-16">
          <g-icon :name="item" class="text-second" size="sm" />
          <g-icon :name="item" class="text-second" size="md" />
          <g-icon :name="item" class="text-second" size="lg" />
          <span class="text-gray-600 leading-10">
            {{ `<g-icon name="${item}" size="sm | md | lg" />`}}
          </span>
        </div>
      </template>
    </span>
  </div>
</template>
