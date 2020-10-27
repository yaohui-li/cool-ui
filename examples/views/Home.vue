<template>
  <div style="text-align:center">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <p>欢迎使用Vue组件库项目</p>
    <div class="demo-wrapper">
      <c-input
        clearable
        placeholder="请输入搜索内容"
        prefix-icon="search"
        show-password
        v-model="text"
      ></c-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
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