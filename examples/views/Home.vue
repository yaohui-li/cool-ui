<!--
 * @Author: your name
 * @Date: 2020-09-29 22:57:29
 * @LastEditTime: 2020-10-02 22:04:50
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
    <div class="btn-demo">
      <c-btn
        disabled
        round
      >默认按钮</c-btn>
      <c-btn
        disabled
        type="primary"
      >主要按钮</c-btn>
      <c-btn type="success">成功按钮</c-btn>
      <c-btn type="warning">警告按钮</c-btn>
      <c-btn type="danger">危险按钮</c-btn>
      <c-btn type="info">信息按钮</c-btn>
    </div>
    <div class="btn-demo">
      <c-btn
        disabled
        plain
        type="primary"
      >主要按钮</c-btn>
      <c-btn
        plain
        type="success"
      >成功按钮</c-btn>
      <c-btn
        plain
        type="warning"
      >警告按钮</c-btn>
      <c-btn
        plain
        type="danger"
      >危险按钮</c-btn>
      <c-btn
        plain
        type="info"
      >信息按钮</c-btn>
    </div>
    <div class="btn-demo">
      <c-btn
        size="larger"
        type="primary"
      >超大按钮</c-btn>
      <c-btn
        size="medium"
        type="success"
      >中等按钮</c-btn>
      <c-btn
        size="small"
        type="danger"
      >小型按钮</c-btn>
      <c-btn
        size="mini"
        type="warning"
      >迷你按钮</c-btn>
    </div>
    <div class="btn-demo">
      <c-btn
        round
        size="larger"
        type="primary"
      >超大按钮</c-btn>
      <c-btn
        round
        size="medium"
        type="success"
      >中等按钮</c-btn>
      <c-btn
        round
        size="small"
        type="danger"
      >小型按钮</c-btn>
      <c-btn
        disabled
        round
        size="mini"
        type="warning"
      >迷你按钮</c-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
<style lang="less" scoped>
.btn-demo + .btn-demo {
  margin-top: 10px;
}
</style>