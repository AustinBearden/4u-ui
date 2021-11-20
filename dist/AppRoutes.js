"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _UseLayout = _interopRequireDefault(require("./components/UseLayout1"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AppRoutes() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.HashRouter, {
    basename: '/4u-ui',
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Switch, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        exact: true,
        path: '/one',
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_UseLayout.default, {})
      })
    })
  });
}

var _default = AppRoutes;
exports.default = _default;