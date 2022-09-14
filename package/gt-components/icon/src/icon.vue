<script>
const fixPosition = ['lock','store','user']

export default {
  name: "GIcon",
  props: {
    name: {
      type: String,
      require: true,
    },
    size: {
      type: String,
      default: "md",
    },
  },
  computed: {
    clz() {
      let result = {
        "gt-icon": true,
      };
      result["gt-icon-" + this.name] = true;
      result["gt-icon-" + this.size] = true;

      if(fixPosition.includes(this.name)){
        result['gt-icon-fix'] = true;
      }

      return result;
    },
  },
  data() {
    return {};
  },
};
</script>

<template>
  <i :class='clz'></i>
</template>
