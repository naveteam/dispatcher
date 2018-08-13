import React, { Component } from 'react'

const initialState = {
  isLoading: null,
  error: null
}

class Dispatcher extends Component {
  constructor () {
    super ()
    this.state = initialState
  }

  dispatch = promise =>
    this.setState({ isLoading: true }, async () => {
      try {
        await promise
      } catch (error) {
        this.setState({ error })
      } finally {
        this.setState({ isLoading: false })
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