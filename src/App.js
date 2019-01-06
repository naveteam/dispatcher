import React from 'react'
import ReactDOM from 'react-dom'
import Dispatcher from './index'

const Button = () =>
    <Dispatcher dispatch={() => fetch('https://jsonplaceholder.typicode.com/todos/1')}>
        {({isLoading, content, hasError, reload}) => (
        !isLoading
            ? <div>
                {JSON.stringify(content)}
            </div>
            : <span>loading...</span>
        )}
    </Dispatcher>

ReactDOM.render(
  <Button />,
  document.getElementById('app')
)

module.hot.accept()