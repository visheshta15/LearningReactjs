import React, {Component} from 'react'
import Heading from './Heading_PureComponent'
import Heading_memo from './Heading_memo'
import Heading_pure from './Heading_pure'

export class PureC extends Component{
  constructor(props){
    super(props)
    this.state = {
      text : ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    this.setState({text : e.target.value})
  }
  
  render(){
    console.log('pc')
    return (
      <div>
        <h3>Pure Class Component</h3>
        <input type="text" value={this.state.text} onChange={this.handleChange}/>
        {/* <Heading /> */}
        <Heading_memo />
        {/* <Heading_pure /> */}
      </div>
    )
  }

}

export default PureC;