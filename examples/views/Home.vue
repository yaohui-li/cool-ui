<template>
  <div style="text-align:center">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <p>欢迎使用Vue组件库项目</p>
    <div class="demo-wrapper">
      <c-container direction="vertical">
        <c-header :padding="[0, '20px']"></c-header>
        <c-main style="width: 100%;height: 200px"></c-main>
        <!-- <c-container>
          <c-aside style="width: 120px; height: 200px"></c-aside>
        </c-container>-->
        <c-footer :padding="[0, '16px']"></c-footer>
      </c-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
<style lang="less" scoped>
.demo-wrapper {
  padding: 12px;
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