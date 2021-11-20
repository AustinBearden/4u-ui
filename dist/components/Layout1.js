"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./atoms/Button"));

var _SideBar = _interopRequireDefault(require("./molecules/SideBar"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Layout1(_ref) {
  let {
    leftHeaderItems,
    rightHeaderItems,
    drawerItems,
    body,
    footer
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: 'layout-one',
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("header", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: 'left-aligned-items',
        children: leftHeaderItems.map((item, index) => {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
            value: item.value,
            icon: item.image,
            action: item.action
          });
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: 'right-aligned-items',
        children: rightHeaderItems.map((item, index) => {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
            icon: item.image,
            action: item.action
          });
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("body", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SideBar.default, {
        barItems: drawerItems
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: 'main-content',
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: 'container',
          children: body
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("footer", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: 'left-content',
        children: footer.left
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: 'center-content',
        children: footer.center
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: 'right-content',
        children: footer.right
      })]
    })]
  });
}

var _default = Layout1;
exports.default = _default;