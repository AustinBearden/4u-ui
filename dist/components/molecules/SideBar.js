"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

function SideBar(_ref) {
  let {
    barItems
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: 'ui4-sidebar',
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: 'ui4-sidebar-contents',
      children: barItems.map((item, _) => {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: 'ui4-sidebar-button',
          onClick: () => item.action(),
          children: item.value
        });
      })
    })
  });
}

var _default = SideBar;
exports.default = _default;