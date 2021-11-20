"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

function Button(_ref) {
  let {
    value,
    icon,
    action
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
    className: value ? 'ui4-button-value' : 'ui4-button',
    onClick: () => action(),
    children: [value ? value : '', icon ? icon : '']
  });
}

var _default = Button;
exports.default = _default;