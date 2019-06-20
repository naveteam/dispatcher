import { Component } from 'react'
import PropTypes from 'prop-types'

class Dispatcher extends Component {
  state = {
    content: null,
    isLoading: true,
    hasError: false
  }

  componentDidMount () {
    this.load()
  }

  componentDidUpdate (prevProps) {
    this.props.shouldUpdate &&
      this.props.shouldUpdate(prevProps) &&
      this.reload()
  }

  load = async () => {
    const { dispatch, errorCallback } = this.props
    try {
      const response = await dispatch()
      this.setState({
        content: response
      })
    } catch (error) {
      console.log(error)
      if (errorCallback) {
        errorCallback(error)
      }
      this.setState({
        hasError: true
      })
    } finally {
      this.setState({
        isLoading: false
      })
    }
  }

  reload = () => {
    this.setState(
      {
        isLoading: true
      },
      () => this.load()
    )
  }

  render () {
    return this.props.children({ ...this.state, reload: this.reload })
  }
}

Dispatcher.propTypes = {
  dispatch: PropTypes.func.isRequired,
  shouldUpdate: PropTypes.func,
  errorCallback: PropTypes.func
}

export * from './hooks/useDispatcher'

export default Dispatcher
