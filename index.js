import React, { Component } from 'react'

class Dispatcher extends Component {
  initialState = { isDispatching: null, error: null }

  state = this.initialState

  dispatch = promise =>
    this.setState({ isDispatching: true }, async () => {
      try {
        await promise
      } catch (error) {
        this.setState({ error })
      } finally {
        this.setState({ isDispatching: false })
      }
    })

  reset = () => this.setState(this.initialState)

  render() {
    return this.props.children({
      ...this.state,
      dispatch: this.dispatch,
      reset: this.reset
    })
  }
}

export default Dispatcher