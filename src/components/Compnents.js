import React from 'react'
import Pure from './pure/PureC'
import FunctionalC from './functional/FunctionalC'
import ClassC from './classBased/ClassC'
import HOC from './higherOrder/HOC'
import ControlledUncontrolled from './controlledUncontrolled/ControlledUncontrolled'
import PureC from './pure/PureC'

function Compnents() {
  return (
    <div>
        <h1>Different Components</h1>
        <hr />
        {/* <Pure /> */}
        {/* <FunctionalC />
        <ClassC /> */}
        {/* <HOC /> */}
        {/* <ControlledUncontrolled /> */}
        <PureC />
    </div>
  )
}
 
export default Compnents