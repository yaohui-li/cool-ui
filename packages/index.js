import Icon from "./Icon/index";
import Button from "./Btn/index";
import Scrollbar from "./Scrollbar/index";
import Row from "./Row/index";
import Col from "./Col/index";

const components = [Icon, Button, Scrollbar, Row, Col];

var install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  version: "0.1.0",
  install,
  Icon,
  Button,
  Scrollbar,
  Row,
  Col
};
