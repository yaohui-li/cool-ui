<template>
  <footer
    :style="style"
    class="c-footer"
  >
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'CFooter',
  props: {
    height: {
      type: String,
      default: '60px',
    },
    padding: {
      type: Array,
      default: () => [0, 0],
    },
  },
  computed: {
    style() {
      const [top = 0, left = 0] = this.padding;
      return {
        height: this.height,
        padding: `${top} ${left}`,
      };
    },
  },
};
</script>