<script setup>
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
    <g-title :level="2" class="mb-3">下拉選項</g-title>
    <div class="w-16">
      <g-dropdown-item
        :label="options[0].label"
        :value="options[0].value"
        @itemClick="handleClick"
      />
      <g-dropdown-item
        :label="options[1].label"
        :value="options[1].value"
        @itemClick="handleClick"
      />
      <g-dropdown-item
        :label="options[2].label"
        :value="options[2].value"
        @itemClick="handleClick"
      />
    </div>
  </div>
</template>
