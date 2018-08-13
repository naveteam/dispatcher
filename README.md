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
    {({ isDispatching, error, dispatch, reset }) => (
      <Authenticator>
        {authenticate => (
          <LoginForm
            isLoading={isDispatching}
            error={error}
            onSubmit={values => dispatch(authenticate(values))}
            onDismissError={reset}
          />
        )}
      </Authenticator>
    )}
  </Dispatcher>
)
```