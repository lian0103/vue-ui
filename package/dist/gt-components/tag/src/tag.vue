<script setup>
const TagTypeEnum = {
  DEFAULT: "green",
  SECOND: "blue",
  DANGER: "red",
  WARNING: "yellow",
  ACTIVITY: "orange",
};

const { label, type, border, dot } = defineProps({
  label: {
    type: String,
    default: "標籤",
  },
  type: {
    type: String,
    default: "DEFAULT",
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
    className.push("is-border");
  }

  if (dot) {
    className.push("dot");
  }

  if (type.toUpperCase() == "ACTIVITY") {
    className = ["full-orange"];
  }

  return className;
};
</script>
<script>
export default {
  name: "GTag",
};
</script>
<template>
  <div
    :class='mapClass()'
    class='gt-tag'
  >
    <div
      class='circle'
      v-if='dot'
    ></div>
    {{ label }}
  </div>
</template>
