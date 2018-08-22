# Dispatcher React Component

## Install

`npm i @naveteam/dispatcher --save`

or

`yarn add @naveteam/dispatcher`

## Usage

```jsx
import Dispatcher from '@naveteam/dispatcher'

const MyComponent = () => (
  <Dispatcher>
    {({ isLoading, error, dispatch, reset }) => (
      <MyComponent onSubmit={() => dispatch(myPromise())} />
    )}
  </Dispatcher>
)
```

`dispatch` function accepts a callback function as second argument to retrieve data if you want

```js
...
<MyComponent
  onSubmit={() => 
    dispatch(
      myPromise(),
      data => console.log(data)
    )
  }
/>
...
```

## Contribute

Run `npm run dev`

Edit `index.js` and `App.js` inside `src` folder