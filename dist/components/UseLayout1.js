"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Layout = _interopRequireDefault(require("./Layout1"));

var _Settings = _interopRequireDefault(require("@mui/icons-material/Settings"));

var _GitHub = _interopRequireDefault(require("@mui/icons-material/GitHub"));

var _Search = _interopRequireDefault(require("@mui/icons-material/Search"));

var _ArrowCircleUp = _interopRequireDefault(require("@mui/icons-material/ArrowCircleUp"));

var _Attachment = _interopRequireDefault(require("@mui/icons-material/Attachment"));

var _FabCard = _interopRequireDefault(require("./molecules/FabCard"));

var _OptionCircle = _interopRequireDefault(require("./molecules/OptionCircle"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UseLayout1() {
  function mainBodyFabCard() {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FabCard.default, {
        bodyText: 'The cool menu content',
        buttons: [{
          value: 'Action 1'
        }, {
          value: 'Action 2'
        }, {
          value: 'Action 3'
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FabCard.default, {
        bodyText: 'The cool menu content',
        buttons: [{
          value: 'Action 1'
        }, {
          value: 'Action 2'
        }, {
          value: 'Action 3'
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FabCard.default, {
        bodyText: 'The cool menu content',
        buttons: [{
          value: 'Action 1'
        }, {
          value: 'Action 2'
        }, {
          value: 'Action 3'
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FabCard.default, {
        bodyText: 'The cool menu content',
        buttons: [{
          value: 'Action 1'
        }, {
          value: 'Action 2'
        }, {
          value: 'Action 3'
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FabCard.default, {
        bodyText: 'The cool menu content',
        buttons: [{
          value: 'Action 1'
        }, {
          value: 'Action 2'
        }, {
          value: 'Action 3'
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FabCard.default, {
        bodyText: 'The cool menu content',
        buttons: [{
          value: 'Action 1'
        }, {
          value: 'Action 2'
        }, {
          value: 'Action 3'
        }]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FabCard.default, {
        bodyText: 'The cool menu content',
        buttons: [{
          value: 'Action 1'
        }, {
          value: 'Action 2'
        }, {
          value: 'Action 3'
        }]
      })]
    });
  }

  function mainBody() {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionCircle.default, {});
  }

  function button1Action() {
    alert('hey there');
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Layout.default, {
    leftHeaderItems: [{
      image: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArrowCircleUp.default, {}),
      action: button1Action,
      value: 'Download'
    }, {
      image: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Attachment.default, {}),
      action: button1Action,
      value: 'Attachment'
    }],
    rightHeaderItems: [{
      image: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Search.default, {}),
      action: button1Action
    }, {
      image: /*#__PURE__*/(0, _jsxRuntime.jsx)(_GitHub.default, {}),
      action: button1Action
    }, {
      image: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Settings.default, {}),
      action: button1Action
    }],
    drawerItems: [{
      value: 'Button1',
      action: button1Action
    }, {
      value: 'Button2',
      action: button1Action
    }, {
      value: 'Button3',
      action: button1Action
    }],
    body: mainBody(),
    footer: {
      left: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: "left footer item"
      }),
      center: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: "center footer item"
      }),
      right: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: "right footer item"
      })
    }
  });
}

var _default = UseLayout1;
exports.default = _default;