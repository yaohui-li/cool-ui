<template>
  <button
    :class="[
      type ? 'c-btn__' + type : '',
      size ? 'c-btn__' + size : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-loading': loading
      }
    ]"
    :disabled="disabled || loading"
    :type="nativeType"
    @click="handleClick($event)"
    class="c-btn"
  >
    <c-icon
      :loading="loading"
      name="spinner"
      v-if="loading"
    ></c-icon>
    <c-icon
      :name="icon"
      v-if="icon && !loading"
    ></c-icon>
    <span
      class="c-btn__text"
      v-if="$slots.default"
    >
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { removeNode } from '../utils/dom';
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
    icon: String,
    circle: Boolean,
    loading: Boolean,
  },
  methods: {
    handleClick(e) {
      const ripples = this.addRipples(e);
      let timer = setTimeout(() => {
        removeNode(ripples);
      }, 1000);
      this.$once('hook:beforeDestory', () => {
        clearTimeout(timer);
        timer = null;
      });
      this.$emit('click', e);
    },
    // 添加涟漪元素和定位
    addRipples(event) {
      const x = event.clientX - event.currentTarget.offsetLeft,
        y = event.clientY - event.currentTarget.offsetTop,
        ripples = document.createElement('span');
      ripples.className = 'ripples';
      ripples.style.left = `${x}px`;
      ripples.style.top = `${y}px`;
      event.currentTarget.appendChild(ripples);
      return ripples;
    },
    /* removeNode(node) {
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      } else {
        node.remove();
      }
    }, */
  },
};
</script>
