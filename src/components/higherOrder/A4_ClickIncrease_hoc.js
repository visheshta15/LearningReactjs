import React from 'react'
import UpdatedComponent from './A_withCounter_hoc'

function A4_ClickIncrease_hoc(props) {
  return (
    <div>
        <p>On Click</p>
        <p style={{fontSize : props.font}}>Size of font in on Click </p>
        <button onClick={props.incFont}>Inc</button>
    </div>
  )
}

export default UpdatedComponent(A4_ClickIncrease_hoc)