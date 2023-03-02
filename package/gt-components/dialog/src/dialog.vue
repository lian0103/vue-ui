<script>
export default {
  name: 'GDialog',
};
</script>
<script setup>
import { computed, ref, onUpdated } from 'vue';
import GButtonClose from '../../../components/GButtonClose.vue';

const DialogEnum = {
  COMFIRM: 'comfirm',
  DELETE: 'delete',
  lg: { maxWidth: 1200, maxHeight: window.innerHeight - 200 },
  md: { maxWidth: 800, maxHeight: window.innerHeight - 200 },
  sm: { maxWidth: 360, maxHeight: window.innerHeight - 200 },
};

const props = defineProps({
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
  width: {
    type: Number,
    default: null,
  },
  height: {
    type: Number,
    default: null,
  },
});

const maxWidth = computed(() => {
  return props.width ? props.width : DialogEnum[props.size]?.maxWidth || 360;
});
const maxHeight = computed(() => {
  return props.height ? props.height - 100 : DialogEnum[props.size]?.maxHeight || 820;
});
const dialogBodyIn = ref();
const isScroll = ref(false);
const emit = defineEmits(['update:modelValue']);

const handleComfirm = () => {
  props.handleCallback();
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
  console.log(bodyHight, maxHeight.value);
  isScroll.value = bodyHight > maxHeight.value - 160 ? true : false;
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
      :style="{
        maxWidth: maxWidth + 'px',
      }"
    >
      <div class="dialog-head">
        {{ title }}
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
