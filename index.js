var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import React, { Component } from 'react';

const initialState = {
  isLoading: null,
  error: null
};

class Dispatcher extends Component {
  constructor() {
    var _this;

    _this = super();

    this.dispatch = (promise, cb) => this.setState({ isLoading: true }, _asyncToGenerator(function* () {
      try {
        const response = yield promise;
        if (cb) cb(response);
      } catch (error) {
        _this.setState({ error });
      } finally {
        _this.setState({ isLoading: false });
      }
    }));

    this.reset = () => this.setState(this.initialState);

    this.state = initialState;
  }

  render() {
    return this.props.children(_extends({}, this.state, {
      dispatch: this.dispatch,
      reset: this.reset
    }));
  }
}

export default Dispatcher;