import React from 'react'
import Controlled from './Controlled'
import Uncontrolled from './Uncontrolled'

function ControlledUncontrolled() {
  return (
    <div>
        <h3>Controlled Component</h3>
        <Controlled />
        <h3>Uncontrolled Component</h3>
        <Uncontrolled />
    </div>
  )
}

export default ControlledUncontrolled