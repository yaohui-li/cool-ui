<template>
  <div style="text-align:center">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <p>欢迎使用Vue组件库项目</p>
    <div class="demo-wrapper">
      <i class="c-icon c-icon-edit"></i>
      <i class="c-icon c-icon-upload"></i>
      <i class="c-icon c-icon-delete"></i>
      <i class="c-icon c-icon-search"></i>
      <i class="c-icon c-icon-loading"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      max: 10,
      text: '123',
    };
  },
};
</script>
<style lang="less" scoped>
.demo-wrapper {
  padding: 12px;
  width: 260px;
  .c-header {
    background: brown;
  }
  .c-aside {
    background: cornsilk;
  }
  .c-main {
    background: darkseagreen;
  }
  .c-footer {
    background: sandybrown;
  }
}
</style>