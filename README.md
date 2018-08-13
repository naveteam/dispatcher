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
      <MyComponent onSubmit={dispatch(myPromise())} />
    )}
  </Dispatcher>
)
```