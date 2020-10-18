export default {
  name: "CRow",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    gap: Number,
    justify: String,
    align: String
  },
  computed: {
    style() {
      let style = {};
      if (this.gap) {
        const value = `-${this.gap / 2}px`;
        style = {
          marginLeft: value,
          marginRight: value
        };
      }
      return style;
    }
  },
  render(h) {
    return h(
      this.tag,
      {
        class: [
          "c-row",
          this.justify ? `is-justify-${this.justify}` : "",
          this.align ? `is-align-${this.align}` : ""
        ],
        style: this.style
      },
      this.$slots.default
    );
  }
};
