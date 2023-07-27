import React from 'react'
import A1_ClickCounter from './A1_ClickCounter'
import A2_StopWatch from './A2_StopWatch'

function A_ReferencingAValue() {
  return (
    <div>
        <h3>Usage</h3>
        <h4>A. Referencing a value with useRef</h4>
        <A1_ClickCounter />
        <A2_StopWatch />
    </div>
  )
}

export default A_ReferencingAValue