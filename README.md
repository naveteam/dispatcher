# Dispatcher React Component

## Install

`npm i @naveteam/dispatcher --save`

or

`yarn add @naveteam/dispatcher`

## Usage

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
| reload | function for make request again

## Contribute

Run `npm run dev`

Edit `index.js` and `App.js` inside `src` folder