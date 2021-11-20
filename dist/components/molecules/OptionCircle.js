"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Button = _interopRequireDefault(require("../atoms/Button"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OptionCircle() {
  function items() {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        value: 'Item 1',
        action: () => console.log('hey')
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        value: 'Item 2',
        action: () => console.log('hey')
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        value: 'Item 3',
        action: () => console.log('hey')
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        value: 'Item 4',
        action: () => console.log('hey')
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        value: 'Item 4',
        action: () => console.log('hey')
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        value: 'Item 4',
        action: () => console.log('hey')
      })]
    });
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: 'option-circle',
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: 'quad2',
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "tile",
        children: "quad2"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "menu",
        children: items()
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: 'quad1',
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "tile",
        children: "quad1"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "menu",
        children: items()
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: 'quad3',
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "tile",
        children: "quad3"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "menu",
        children: items()
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: 'quad4',
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "tile",
        children: "quad4"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "menu",
        children: items()
      })]
    })]
  });
}

var _default = OptionCircle;
exports.default = _default;