<script setup>
import GIcons from './GIcons.vue';

const TagTypeEnum = {
  DEFAULT: 'green',
  SECOND: 'blue',
  DANGER: 'red',
  WARNING: 'yellow',
  ACTIVITY: 'orange',
};

const { label, type, border, dot } = defineProps({
  label: {
    type: String,
    default: '標籤',
  },
  type: {
    type: String,
    default: 'DEFAULT',
  },
  border: {
    type: Boolean,
    default: false,
  },
  dot: {
    type: Boolean,
    default: false,
  },
});

const mapClass = () => {
  let className = [TagTypeEnum[type.toUpperCase()]];

  if (border) {
    className.push('is-border');
  }

  if (type.toUpperCase() == 'ACTIVITY') {
    className = ['full-orange'];
  }

  return className;
};
</script>

<template>
  <div class="gt-tag" :class="mapClass()">
    <g-icons v-if="dot" class="w-6" name="circle" />
    {{ label }}
  </div>
</template>

<style lang="scss">
.green {
  --text-color: #2b9749;
  --bg-color: #eef5eb;
}

.blue {
  --text-color: #4f9ffc;
  --bg-color: #f6f7f9;
}

.red {
  --text-color: #fc806f;
  --bg-color: #fef6f6;
}

.yellow {
  --text-color: #ffb526;
  --bg-color: #fefaf1;
}

.full-orange {
  --text-color: #fff;
  --bg-color: #ff8e26;
}

.gt-tag {
  width: auto;
  @apply flex justify-center items-center;
  padding: 4px 10px;
  height: 29px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  border-radius: 5px;
  color: var(--text-color);
  background-color: var(--bg-color);

  &.is-border {
    @apply border border-solid;
    border-color: var(--text-color);
  }

  &.full-orange {
    border-color: var(--bg-color);
  }
}
</style>
