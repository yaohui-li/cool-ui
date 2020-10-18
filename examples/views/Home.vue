<template>
  <div style="text-align:center">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <p>欢迎使用Vue组件库项目</p>
    <div class="demo-wrapper">
      <c-row :gap="10">
        <c-col
          :lg="3"
          :md="4"
          :sm="6"
          :xl="1"
          :xs="8"
        >
          <div></div>
        </c-col>
        <c-col
          :lg="9"
          :md="8"
          :sm="6"
          :xl="11"
          :xs="4"
        >
          <div></div>
        </c-col>
        <c-col
          :lg="9"
          :md="8"
          :sm="6"
          :xl="11"
          :xs="4"
        >
          <div></div>
        </c-col>
        <c-col
          :lg="3"
          :md="4"
          :sm="6"
          :xl="1"
          :xs="{ span: 5, offset: 3}"
        >
          <div></div>
        </c-col>
      </c-row>
      <!-- <c-row :gap="10">
        <c-col :span="4">
          <div>4</div>
        </c-col>
        <c-col :span="4">
          <div>4</div>
        </c-col>
        <c-col :span="4">
          <div>4</div>
        </c-col>
      </c-row>
      <c-row :gap="10">
        <c-col :span="6">
          <div>6</div>
        </c-col>
        <c-col :span="6">
          <div>6</div>
        </c-col>
      </c-row>
      <c-row
        :gap="10"
        align="middle"
        justify="center"
      >
        <c-col :span="4">
          <div>4</div>
        </c-col>
        <c-col
          :offset="2"
          :span="4"
        >
          <div>4</div>
        </c-col>
      </c-row>-->
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
  .c-row {
    height: 48px;
  }
  .c-col {
    div {
      height: 36px;
      background: #607d8b;
      border-radius: 4px;
      text-align: center;
      line-height: 36px;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>