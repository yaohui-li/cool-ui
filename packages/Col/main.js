export default {
  name: "CCol",
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: Number,
    pull: Number,
    push: Number,
    xl: [Number, Object],
    lg: [Number, Object],
    md: [Number, Object],
    sm: [Number, Object],
    xs: [Number, Object]
  },
  computed: {
    gap() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== "CRow") {
        parent = parent.$parent;
      }
      return parent ? parent.gap : 0;
    },
    style() {
      let style = {};
      if (this.gap) {
        const value = `${this.gap / 2}px`;
        style = {
          paddingLeft: value,
          paddingRight: value
        };
      }
      return style;
    }
  },
  render(h) {
    const classList = [];
    ["span", "offset"].forEach(prop => {
      if (this[prop]) {
        classList.push(
          prop === "span"
            ? `c-col-${this[prop]}`
            : `c-col-${prop}-${this[prop]}`
        );
      }
    });
    ["xs", "sm", "md", "lg", "xl"].forEach(size => {
      if (typeof this[size] === "number") {
        classList.push(`c-col-${size}-${this[size]}`);
      } else {
        const props = this[size];
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== "span"
              ? `c-col-${size}-${prop}-${props[prop]}`
              : `c-col-${size}-${props[prop]}`
          );
        });
      }
    });
    return h(
      "div",
      {
        class: ["c-col", classList],
        style: this.style
      },
      this.$slots.default
    );
  }
};
