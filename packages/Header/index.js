import CHeader from "./main.vue";

CHeader.install = function(Vue) {
  Vue.component(CHeader.name, CHeader);
};

export default CHeader;
