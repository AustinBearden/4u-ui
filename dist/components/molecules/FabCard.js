"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../atoms/Button"));

var _ViewWeek = _interopRequireDefault(require("@mui/icons-material/ViewWeek"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FabCard(_ref) {
  let {
    bodyText,
    buttons
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: 'fab-card-container',
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: 'fab-card-body',
      children: bodyText
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: 'fab-card-end',
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: 'menu',
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ViewWeek.default, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: 'menu-expanded',
        children: buttons.map((button, _) => {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
            value: button.value
          });
        })
      })]
    })]
  });
}

var _default = FabCard;
exports.default = _default;