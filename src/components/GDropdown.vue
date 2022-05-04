<script setup>
const { type } = defineProps({
  type: {
    type: String,
  },
});
</script>

<template>
  <el-dropdown class="gt-dropdown" type="primary"
    ><slot></slot>

    <template #dropdown>
      <slot name="dropdown" />
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
.gt-dropdown {
  @apply rounded-md;
  border-radius: 6px !important;
}
</style>
