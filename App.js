import React from 'react';
import ReactDOM from 'react-dom';
import Dispatcher from './index';

const Button = () => React.createElement(
    Dispatcher,
    { dispatch: () => fetch('https://jsonplaceholder.typicode.com/todos/1') },
    ({ isLoading, content, hasError, reload }) => !isLoading ? React.createElement(
        'div',
        null,
        JSON.stringify(content)
    ) : React.createElement(
        'span',
        null,
        'loading...'
    )
);

ReactDOM.render(React.createElement(Button, null), document.getElementById('app'));

module.hot.accept();