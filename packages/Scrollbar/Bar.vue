<template>
  <div
    :class="`is-${bar.key}`"
    :style="{[trackSizeKey]: `${size}px`}"
    @mousedown="clickTrack"
    class="c-scrollbar-track"
    ref="track"
  >
    <div
      :style="barStyle"
      @mousedown="clickThumb"
      class="c-scrollbar-thumb"
      ref="thumb"
    ></div>
  </div>
</template>

<script>
import { SCROLLBAR_MAP } from '../utils/constant';
export default {
  name: 'Bar',
  props: {
    vertical: Boolean,
    color: String,
    size: Number,
    thumbStyle: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    trackSizeKey() {
      return this.bar.key === 'vertical' ? 'width' : 'height';
    },
    barStyle() {
      return {
        ...this.thumbStyle,
        ...{
          backgroundColor: this.color,
          [this.trackSizeKey]: `${this.size}px`,
          borderRadius: `${this.size / 2}px`,
        },
      };
    },
    bar() {
      return SCROLLBAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
    },
    content() {
      return this.$parent.content;
    },
  },
  methods: {
    clickTrack(e) {
      const offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]),
        thumbHalf = this.$refs.thumb.offsetHeight / 2,
        thumbPositionPercentage = ((offset - thumbHalf) * 100) / this.$refs.track.offsetHeight;

      this.content[this.bar.scroll] = (thumbPositionPercentage * this.content[this.bar.scrollSize]) / 100;
    },
    clickThumb(e) {
      // 按下ctrl键或鼠标右键 则事件终止
      if (e.ctrlKey || e.button === 2) return false;
      this.startDrag(e);
      this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
    },
    startDrag(e) {
      e.stopImmediatePropagation();
      this.cursorDown = true;
      document.addEventListener('mousemove', this.mouseMoveThumb, false);
      document.addEventListener('mouseup', this.mouseUpThumb, false);
      // 销毁事件
      this.$once('hook:beforeDestory', () => {
        document.removeEventListener('mouseup', this.mouseUpThumb, false);
      });
      document.onselectstart = () => false;
    },
    mouseMoveThumb(e) {
      if (this.cursorDown === false) return false;
      var prevPage = this[this.bar.axis];
      if (!prevPage) return false;
      const offset = (this.$refs.track.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1,
        thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage,
        thumbPositionPercentage = ((offset - thumbClickPosition) * 100) / this.$refs.track[this.bar.offset];

      this.content[this.bar.scroll] = (thumbPositionPercentage * this.content[this.bar.scrollSize]) / 100;
    },
    mouseUpThumb() {
      this.cursorDown = false;
      this[this.bar.axis] = 0;
      document.removeEventListener('mousemove', this.mouseMoveThumb, false);
      document.onselectstart = null;
    },
  },
};
</script>
