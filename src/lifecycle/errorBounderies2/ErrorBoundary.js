import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ErrorFallback from './ErrorFallback'

class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            error : null
        }
    }


    static getDeriveddStateFromError(error){
        console.log('get error', error)
        return {error}
    }
//   static propTypes = {second: third}

  render() {
    const error =  this.state.error  || this.props.error
    if(error){
       return (
        <ErrorFallback 
            error={error}
            resetErrorBoundary={()=> this.props.resetErrorBoundary}
        />
       ) 
    }
    return (
      this.props.children
    )
  }
}


export default ErrorBoundary