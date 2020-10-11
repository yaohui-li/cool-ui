<template>
  <div class="btn-wrapper">
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
    <div class="btn-demo">
      <c-btn
        circle
        icon="trash-o"
        size="medium"
        type="danger"
      ></c-btn>
      <c-btn
        circle
        icon="pencil"
        size="medium"
        type="primary"
      ></c-btn>
      <c-btn
        circle
        icon="check"
        size="medium"
        type="success"
      ></c-btn>
      <c-btn
        circle
        icon="envelope-o"
        size="medium"
        type="info"
      ></c-btn>
      <c-btn
        circle
        icon="star"
        size="medium"
        type="warning"
      ></c-btn>
      <c-btn
        circle
        icon="search"
        size="medium"
      ></c-btn>
      <c-btn
        icon="search"
        size="medium"
        type="primary"
      >搜索</c-btn>
      <c-btn
        size="medium"
        type="primary"
      >
        上传
        <c-icon name="cloud-upload"></c-icon>
      </c-btn>
      <c-btn
        icon="share-alt"
        size="medium"
        type="primary"
      ></c-btn>
      <c-btn
        loading
        size="medium"
        type="primary"
      >加载中...</c-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BtnDemo',
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang='less' scoped>
.btn-wrapper {
  text-align: center;
  margin-top: 24px;
  .btn-demo + .btn-demo {
    margin-top: 10px;
  }
}
</style>
