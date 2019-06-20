import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { Component } from 'react';
import PropTypes from 'prop-types';

var Dispatcher =
/*#__PURE__*/
function (_Component) {
  _inherits(Dispatcher, _Component);

  function Dispatcher() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dispatcher);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dispatcher)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      content: null,
      isLoading: true,
      hasError: false
    });

    _defineProperty(_assertThisInitialized(_this), "load",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      var _this$props, dispatch, errorCallback, response;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, dispatch = _this$props.dispatch, errorCallback = _this$props.errorCallback;
              _context.prev = 1;
              _context.next = 4;
              return dispatch();

            case 4:
              response = _context.sent;

              _this.setState({
                content: response
              });

              _context.next = 13;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

              if (errorCallback) {
                errorCallback(_context.t0);
              }

              _this.setState({
                hasError: true
              });

            case 13:
              _context.prev = 13;

              _this.setState({
                isLoading: false
              });

              return _context.finish(13);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8, 13, 16]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "reload", function () {
      _this.setState({
        isLoading: true
      }, function () {
        return _this.load();
      });
    });

    return _this;
  }

  _createClass(Dispatcher, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.load();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.props.shouldUpdate && this.props.shouldUpdate(prevProps) && this.reload();
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(_objectSpread({}, this.state, {
        reload: this.reload
      }));
    }
  }]);

  return Dispatcher;
}(Component);

Dispatcher.propTypes = {
  dispatch: PropTypes.func.isRequired,
  shouldUpdate: PropTypes.func,
  errorCallback: PropTypes.func
};
export * from './hooks/useDispatcher';
export default Dispatcher;