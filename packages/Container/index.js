import CContainer from "./main.vue";

CContainer.install = function(Vue) {
  Vue.component(CContainer.name, CContainer);
};
export default CContainer;
