<script setup>
import { computed, watch, ref, onUpdated, onMounted } from 'vue';

const DialogEnum = {
  COMFIRM: 'comfirm',
  DELETE: 'delete',
  lg: { maxWidth: 1200, maxHeight: window.innerHeight - 200 },
  md: { maxWidth: 800, maxHeight: window.innerHeight - 200 },
  sm: { maxWidth: 360, maxHeight: window.innerHeight - 200 },
};

const { modelValue, title, align, handleCallback, mode, size } = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
  },
  align: {
    type: String,
    default: 'left',
  },
  handleCallback: {
    type: Function,
    default: () => {},
  },
  mode: {
    type: String,
    default: 'comfirm',
  },
  size: {
    type: String,
    default: 'sm',
  },
  // maxWidth: {
  //   type: Number,
  //   default: 480,
  // },
  // maxHeight: {
  //   type: Number,
  //   default: 400,
  // },
});

const maxWidth = computed(() => {
  return DialogEnum[size]?.maxWidth || 360;
});
const maxHeight = computed(() => {
  return DialogEnum[size]?.maxHeight || 820;
});
const show = ref(modelValue);
const dialogBodyIn = ref();
const isScroll = ref(false);
const emit = defineEmits(['update:modelValue']);

const handleComfirm = () => {
  handleCallback();
  emit('update:modelValue', false);
};

const handleCloseWrapper = (e) => {
  if (e.target.classList.contains('gt-dialog-wrapper')) {
    emit('update:modelValue', false);
  }
};

const handleClose = (e) => {
  emit('update:modelValue', false);
};

const eventHandle = () => {
  emit('update:modelValue', false);
};

onUpdated(() => {
  let bodyHight = Math.ceil(dialogBodyIn.value.getBoundingClientRect()?.height);
  isScroll.value = bodyHight > maxHeight.value ? true : false;
});
</script>

<template>
  <div
    class="gt-dialog-wrapper"
    :class="modelValue ? 'active' : ''"
    @click="handleCloseWrapper"
  >
    <div
      class="gt-dialog"
      :class="[`gt-text-${align}`, modelValue ? 'active' : '']"
      @click.prevent="() => {}"
      :style="{ maxWidth: maxWidth + 'px' }"
    >
      <div class="dialog-head">
        {{ title }} <g-button-close class="closeIcon" @click="handleClose" />
      </div>
      <div
        class="dialog-body"
        :style="{
          maxHeight: maxHeight + 'px',
          overflowY: isScroll ? 'scroll' : 'none',
        }"
      >
        <div class="dialog-body-in" ref="dialogBodyIn">
          <slot></slot>
        </div>
      </div>
      <div class="dialog-footer">
        <g-button round type="white" class="btn-cancel" @click="handleClose"
          >取消</g-button
        >
        <template v-if="mode == DialogEnum.COMFIRM">
          <g-button round @click="handleComfirm">確定</g-button>
        </template>
        <template v-else>
          <g-button round type="red" @click="handleComfirm">刪除</g-button>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.gt-dialog-wrapper {
  width: 100vw;
  height: 100vh;
  display: none;
  z-index: -1;
  @apply fixed left-0 top-0;
  &.active {
    z-index: 300;
    @apply block;
  }
}
.gt-dialog {
  width: 100%;
  // min-width: 380px;
  // max-width: 50vw;
  display: none;
  @apply fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2;
  @apply flex-col bg-white text-gray1;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: -1;
  font-size: 16px;
  letter-spacing: 0.8px;

  &.active {
    z-index: 300;
    @apply flex;
  }

  .dialog-head {
    width: 100%;
    height: 44px;
    padding: 12px 10px 8px 40px;
    font-weight: 400;
    line-height: 24px;
    @apply relative;
    .closeIcon {
      @apply absolute right-0 top-0;
    }
  }

  .dialog-body {
    min-height: 83px;
    padding: 20px 40px 40px 40px;
    font-weight: 400;
    line-height: 23px;
    font-weight: 400;
    .dialog-body-in {
      width: 100%;
      height: 100%;
    }

    &::-webkit-scrollbar {
      width: 5px;
      height: 1px;
      background-color: $gt-gray;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: $gt-gray-variant;
      &:hover {
        background-color: $gt-gray-dark;
      }
    }
  }
  .dialog-footer {
    height: 56px;
    padding: 10px;
    @apply border-t border-solid border-color3;

    @apply flex justify-end items-center;
    .btn-cancel {
      margin-right: 10px;
    }
  }
}
</style>
