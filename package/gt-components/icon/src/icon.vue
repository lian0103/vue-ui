<script>
const fixPosition = ['lock', 'store', 'user'];

export default {
  name: 'GIcon',
  props: {
    name: {
      type: String,
      require: true,
    },
    classes: {
      type: String,
    },
    size: {
      type: String,
      default: 'md',
    },
  },
  computed: {
    clz() {
      let arr = ['gt-icon', `gt-icon-${this.size}`];

      if (this.name) {
        arr.push(`gt-icon-${this.name}`);
      }

      if (this.classes) {
        arr.push(this.classes);
      }

      if (fixPosition.includes(this.name)) {
        arr.push('gt-icon-fix');
      }

      return arr;
    },
  },
  data() {
    return {};
  },
};
</script>

<template>
  <i :class="clz"></i>
</template>
