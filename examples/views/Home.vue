<!--
 * @Author: your name
 * @Date: 2020-09-29 22:57:29
 * @LastEditTime: 2020-10-11 22:41:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cool-ui\examples\views\Home.vue
-->
<template>
  <div style="text-align:center">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <p>欢迎使用Vue组件库项目</p>
    <div class="demo-wrapper">
      <c-scrollbar
        :bar-size="8"
        bar-color="#44ccaa"
      >
        <ul class="list">
          <li class="list-item">情人蛋糕</li>
          <li class="list-item">双皮奶</li>
          <li class="list-item">龙须面</li>
          <li class="list-item">干拌面</li>
          <li class="list-item">北京烤鸭</li>
          <li class="list-item">样子甘露</li>
          <li class="list-item">意大利面</li>
        </ul>
      </c-scrollbar>
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
  min-width: 240px;
  width: 240px;
  height: 180px;
  margin: 0 auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.25);
}
.list {
  list-style-type: none;
  // width: 300px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: left;
  max-height: 180px;
  border-radius: 4px;
  .list-item {
    padding: 0 16px;
    line-height: 36px;
  }
}
</style>