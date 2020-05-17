const React = {
  createElement(type, props, ...children) {
    return JSON.stringify({ type, props, children });
  },
};

export default React;
