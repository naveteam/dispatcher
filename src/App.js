import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatcher } from './index'

const App = () => {
    const [isLoading, error, content, reload] = useDispatcher(() => fetch('https://jsonplaceholder.typicode.com/todos/1'))

    if (isLoading) {
        return (
            <span>loading...</span>
        )
    }

    if (error) {
        <span>{JSON.stringify(error)}</span>
    }

    return (
        <div>
            <p>{JSON.stringify(content)}</p>
            <button onClick={reload}>reload</button>
        </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

module.hot.accept()