<template>
  <div
    :class="[
      {
        'c-input-prefix': prefixIcon,
        'c-input-suffix': suffixIcon
      }
    ]"
    @mouseleave="hovering = false"
    @mouseover="hovering = true"
    class="c-input"
  >
    <input
      :class="[
        {
          'is-disabled': disabled,
        }
      ]"
      :disabled="disabled"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisiable ? 'text' : 'password'): type"
      :value="value"
      @blur="handleBlur"
      @change="handleChange"
      @focus="handleFocus"
      @input="handleInput"
      class="c-input-inner"
      ref="input"
    />
    <span
      class="c-input__prefix"
      v-if="prefixIcon"
    >
      <span class="c-input__prefix-inner">
        <c-icon
          :name="prefixIcon"
          class="c-input-icon"
          size="16px"
          style="width: 24px;"
        ></c-icon>
      </span>
    </span>
    <span class="c-input__suffix">
      <span class="c-input__suffix-inner">
        <c-icon
          :name="suffixIcon"
          :size="IconFont"
          :style="IconWidth"
          class="c-input-icon"
          v-if="suffixIcon"
        ></c-icon>
        <c-icon
          :size="IconFont"
          :style="IconWidth"
          @click.native="handleClickEye"
          class="c-input-icon"
          name="eye"
          v-if="showPwdVisiable"
        ></c-icon>
        <c-icon
          :size="IconFont"
          :style="IconWidth"
          @click.native="handleClear"
          class="c-input-icon"
          name="times"
          v-if="showClear"
        ></c-icon>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'CInput',
  props: {
    value: {
      type: [String, Number],
    },
    type: String,
    placeholder: String,
    disabled: Boolean,
    lazy: Boolean,
    clearable: Boolean,
    prefixIcon: String,
    suffixIcon: String,
    showPassword: Boolean,
  },
  data() {
    return {
      IconFont: '16px',
      IconWidth: { width: '24px' },
      hovering: false,
      focused: false,
      passwordVisiable: false,
    };
  },
  computed: {
    input() {
      return this.$refs.input;
    },
    showClear() {
      return this.clearable && !this.disabled && this.value && (this.hovering || this.focused);
    },
    showPwdVisiable() {
      return this.showPassword && !this.disabled && (!!this.value || this.focused);
    },
  },
  methods: {
    focus() {
      return this.$refs.input.focus();
    },
    handleFocus() {
      this.focused = true;
    },
    handleBlur() {
      this.focused = false;
    },
    handleInput(evt) {
      if (this.lazy) return;
      this.$emit('input', evt.target.value);
    },
    handleChange(evt) {
      console.log('change', evt);
      if (!this.lazy) return;
      this.$emit('change', evt.target.vaue);
    },
    handleClickEye() {
      this.passwordVisiable = !this.passwordVisiable;
      const inputNode = this.$refs.input;
      this.input.value = this.value;
      this.$nextTick(() => {
        this.focus();
      });
      this.cursorToEndForIE(this.input);
    },
    // 清除值
    handleClear() {
      console.log(123);
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
    },
    // 兼容IE光标到最后的问题
    cursorToEndForIE(el) {
      if (el.createTextRange) {
        var rtextRange = el.createTextRange();
        rtextRange.moveStart('character', el.value.length);
        rtextRange.collapse(true);
        rtextRange.select();
      }
    },
  },
};
</script>
