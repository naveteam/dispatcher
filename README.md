# Dispatcher React Component

## Install

`React` version below `16.8`:

`yarn add @naveteam/dispatcher@1.0`

`React` version above `16.8`:

`yarn add @naveteam/dispatcher`

## Usage

### Without hooks

```jsx
import Dispatcher from '@naveteam/dispatcher'

const MyComponent = () => (
  <Dispatcher dispatch={() => fetch('https://jsonplaceholder.typicode.com/todos/1')}>
    {({isLoading, content, hasError, reload}) => (
    !isLoading
        ? <div>
            {JSON.stringify(content)}
        </div>
        : <span>loading...</span>
    )}
  </Dispatcher>
)
```

### With hooks

```jsx
import { useDispatcher } from '@naveteam/dispatcher'

const MyComponent = () => {
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
```

## Component Props

| Prop  |  value | Example | Required |
|---|---|---|---|
| dispatch | function that returns a promise |  `() => myPromise()` | yes |
| shouldUpdate  | Comparison of props to trigger shouldComponentUpdate  | ```<Dispatcher lastId={'0'} shouldUpdate={prevProps => prevProps.lastId !== lastId}>{...}</Dispatcher> ``` | no |
| errorCallback  | function triggered when an request error occurs  |  `error => console.log(error)` | no |

## Render Props

| Prop  | Explanation | Default Value |
|---|---|---|
| isLoading | Boolean indicating request has finished | true |
| content | value of finished promise | null |
| hasError | boolean indicating if request failed | false |
| reload | calls dispatch function

## Contribute

Run `yarn dev`

Edit `index.js` and `App.js` inside `src` folder