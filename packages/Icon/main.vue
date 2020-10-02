<template>
  <i
    :class="[
      iconName,
      {
        'fa-spinner fa-pulse': loading
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
    size: String
  },
  computed: {
    iconName () {
      return this.name && this.name !== 'spinner' ? `fa-${this.name}` : ''
    }
  }
}
</script>
<style lang="less" scoped>
.reset-width {
  width: 1rem;
}
</style>
