import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatcher } from './index';

var App = function App() {
  var _useDispatcher = useDispatcher(function () {
    return fetch('https://jsonplaceholder.typicode.com/todos/1');
  }),
      _useDispatcher2 = _slicedToArray(_useDispatcher, 4),
      isLoading = _useDispatcher2[0],
      error = _useDispatcher2[1],
      content = _useDispatcher2[2],
      reload = _useDispatcher2[3];

  if (isLoading) {
    return React.createElement("span", null, "loading...");
  }

  if (error) {
    React.createElement("span", null, JSON.stringify(error));
  }

  return React.createElement("div", null, React.createElement("p", null, JSON.stringify(content)), React.createElement("button", {
    onClick: reload
  }, "reload"));
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
module.hot.accept();