import React from 'react'
import ReactDOM from 'react-dom'
import Dispatcher from './index'

const Button = () =>
    <Dispatcher>
        {({isLoading, dispatch, error}) => (
        !isLoading
            ? <button
                onClick={() =>
                    dispatch(fetch('https://jsonplaceholder.typicode.com/todos/1'), data => console.log(data))
                }
            >
                send get
            </button>
            : <span>loading...</span>
        )}
    </Dispatcher>

ReactDOM.render(
  <Button />,
  document.getElementById('app')
)

module.hot.accept()