import React from 'react'
import B_status_hoc from './B_status_hoc'

function B2_Error(props) {
  return (
    <div>

        <p style={{color: props.obj.color}}>{props.obj.symbol}{props.obj.text}</p>
    </div>
  )
}

export default B_status_hoc(B2_Error, 'red')

