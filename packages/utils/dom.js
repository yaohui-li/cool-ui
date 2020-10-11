export const removeNode = function(node) {
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  } else {
    node.remove();
  }
};

export default { removeNode };
