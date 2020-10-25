<template>
  <header
    :style="style"
    class="c-header"
  ></header>
</template>

<script>
export default {
  name: 'CHeader',
  props: {
    height: {
      type: String,
      default: '60px',
    },
    padding: {
      type: Array,
      default: () => ['10px', '10px'],
    },
  },
  computed: {
    style() {
      const [top = 0, left = 0] = this.padding;
      return {
        padding: `${top} ${left}`,
        height: this.height,
      };
    },
  },
};
</script>