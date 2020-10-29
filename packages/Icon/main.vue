<template>
  <i
    :class="[name ? `c-icon-${name}` : '']"
    class="c-icon"
  ></i>
</template>

<script>
export default {
  name: 'CIcon',
  props: {
    name: String,
    loading: Boolean,
    size: String,
  },
};
</script>
<style lang="less" scoped>
.reset-width {
  width: 1rem;
}
</style>
