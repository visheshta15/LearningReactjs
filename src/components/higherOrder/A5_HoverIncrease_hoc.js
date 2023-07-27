import React from 'react'
import UpdatedComponent from './A_withCounter_hoc'


function A5_HoverIncrease_hoc(props) {
  return (
    <div>
        <p>On Hover</p>
        <p style={{fontSize: props.font}} onMouseOver={props.incFont}>Size of font in on Click </p>
        <p>{props.text && props.text}</p>
    </div>
  )
}

export default UpdatedComponent(A5_HoverIncrease_hoc, 'hover')