/* eslint-disable no-useless-return */
<template>
  <div class="c-scrollbar-wrap">
    <!-- 插槽内容 -->
    <div
      @scroll="scrollContent"
      class="c-scrollbar-content"
      ref="content"
    >
      <slot></slot>
    </div>
    <!-- 滚动条 -->
    <bar
      :color="barColor"
      :size="barSize"
      :thumb-style="{...moveTop, ...{height: thumbHeight}}"
      vertical
    ></bar>
    <bar
      :color="barColor"
      :size="barSize"
      :thumb-style="{...moveLeft, ...{width: thumbWidth}}"
    ></bar>
  </div>
</template>

<script>
import Bar from './Bar';
export default {
  name: 'CScrollbar',
  components: { Bar },
  props: {
    barColor: {
      type: String,
      default: '#90a4ae',
    },
    barSize: {
      type: Number,
      default: 6,
    },
  },
  data() {
    return {
      thumbHeight: '0',
      thumbWidth: '0',
      moveTop: {
        transform: '',
      },
      moveLeft: {
        transform: '',
      },
      y: 0,
      x: 0,
      cursorDown: false,
    };
  },
  computed: {
    content() {
      return this.$refs.content;
    },
  },
  mounted() {
    this.$nextTick(this.computedThumbSize);
  },
  methods: {
    // 内容滚动事件
    scrollContent(e) {
      const content = this.content,
        moveY = (content.scrollTop * 100) / content.clientHeight,
        moveX = (content.scrollLeft * 100) / content.clientWidth;
      this.moveTop.transform = `translateY(${moveY}%)`;
      this.moveLeft.transform = `translateX(${moveX}%)`;
    },
    // 计算thumb的大小
    computedThumbSize() {
      const content = this.content,
        thumbHeight = (content.clientHeight * 100) / content.scrollHeight,
        thumbWidth = (content.clientWidth * 100) / content.scrollWidth;
      this.thumbHeight = thumbHeight < 100 ? `${thumbHeight}%` : '';
      this.thumbWidth = thumbWidth < 100 ? `${thumbWidth}%` : '';
    },
  },
};
</script>
