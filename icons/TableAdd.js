'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableAdd = function TableAdd(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'TableAdd' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M8,5 L8,23 M16,5 L16,11 M1,11 L17,11 M1,5 L23,5 M1,17 L11,17 M17,23 L1,23 L1,1 L23,1 L23,17 M17,23 C20.3137085,23 23,20.3137085 23,17 C23,13.6862915 20.3137085,11 17,11 C13.6862915,11 11,13.6862915 11,17 C11,20.3137085 13.6862915,23 17,23 Z M17,14 L17,20 M17,14 L17,20 M14,17 L20,17' })
      )
    )
  );
};

exports.default = TableAdd;