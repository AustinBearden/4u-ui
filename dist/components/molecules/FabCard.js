"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../atoms/Button"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ViewWeekIcon from '@mui/icons-material/ViewWeek';
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
        className: 'menu'
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: 'menu-expanded',
        children: buttons.map((button, _) => {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
            value: button.value,
            action: () => alert(button.value)
          });
        })
      })]
    })]
  });
}

var _default = FabCard;
exports.default = _default;