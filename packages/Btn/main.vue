<template>
  <button
    :class="[
      type ? 'c-btn__' + type : '',
      size ? 'c-btn__' + size : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-disabled': disabled
      }
    ]"
    :disabled="disabled"
    :type="nativeType"
    @click="handleClick($event)"
    class="c-btn"
  >
    <slot></slot>
  </button>
</template>

<script>
/* TODO 
  1. 图标按钮
  2. 圆形按钮
  3. 加载按钮
*/
export default {
  name: 'CBtn',
  props: {
    type: String,
    plain: Boolean,
    size: {
      type: String,
      default: 'medium',
    },
    disabled: Boolean,
    round: Boolean,
    nativeType: String,
  },
  methods: {
    handleClick(e) {
      const ripples = this.addRipples(e);
      let timer = setTimeout(() => {
        ripples.remove();
      }, 1000);
      this.$once('hook:beforeDestory', () => {
        clearTimeout(timer);
        timer = null;
      });
      this.$emit('click', e);
    },
    // 添加涟漪元素和定位
    addRipples(event) {
      const x = event.clientX - event.target.offsetLeft;
      const y = event.clientY - event.target.offsetTop;
      const ripples = document.createElement('span');
      ripples.className = 'ripples';
      ripples.style.left = `${x}px`;
      ripples.style.top = `${y}px`;
      event.target.appendChild(ripples);
      return ripples;
    },
  },
};
</script>
