var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import { Component } from 'react';
import PropTypes from 'prop-types';

class Dispatcher extends Component {
  constructor(...args) {
    var _temp, _this;

    return _temp = _this = super(...args), this.state = {
      content: null,
      isLoading: true,
      hasError: false
    }, this.load = _asyncToGenerator(function* () {
      const { dispatch, errorCallback } = _this.props;
      try {
        const response = yield dispatch();
        _this.setState({
          content: response
        });
      } catch (error) {
        console.log(error);
        if (errorCallback) {
          errorCallback(error);
        }
        _this.setState({
          hasError: true
        });
      } finally {
        _this.setState({
          isLoading: false
        });
      }
    }), this.reload = () => {
      this.setState({
        isLoading: true
      }, () => this.load());
    }, _temp;
  }

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps) {
    this.props.shouldUpdate && this.props.shouldUpdate(prevProps) && this.reload();
  }

  render() {
    return this.props.children(_extends({}, this.state, { reload: this.reload }));
  }
}

Dispatcher.propTypes = {
  dispatch: PropTypes.func.isRequired,
  shouldUpdate: PropTypes.func,
  errorCallback: PropTypes.func
};

export default Dispatcher;