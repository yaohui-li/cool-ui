<template>
  <div
    :class="{
      'is-vertical': isVertical
    }"
    class="c-container"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CContainer',
  props: {
    direction: String,
  },
  mounted() {},
  computed: {
    isVertical() {
      const isVertical = this.direction === 'vertical';
      return this.$slots && this.$slots.default
        ? this.$slots.default.some((vnode) => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            return tag === 'c-header' || tag === 'c-footer';
          })
        : isVertical;
    },
  },
};
</script>

<style lang='scss' scoped>
</style>
