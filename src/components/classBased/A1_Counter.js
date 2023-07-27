// These components are simple classes (made up of multiple functions that add functionality to the application).
//  create a render function that returns a React element.

import React, { Component } from 'react'

export class A1_Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count : 0
        }
        this.increase = this.increase.bind(this)
    }
    increase(){
        this.setState({count: this.state.count+1})
    }
    
  render() {
    return (
      <div>
        <p>Counter App using Class Based Component :</p>
        <p>{this.state.count}</p>
        <button onClick={this.increase}>Inc</button>
      </div>
    )
  }
}

export default A1_Counter