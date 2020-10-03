<template>
  <i
    :class="[
      name ? `fa-${this.name}` : '',
      {
        'fa-pulse': loading
      }
    ]"
    :style="{ fontSize: size, width: size }"
    class="fa fa-fw reset-width"
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
