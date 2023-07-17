import React from 'react'
import E1_usingDirectState from './E1_usingDirectState_Counter'
import E2_usingUpdaterFunction from './E2_usingUpdaterFunction_Counter'


function E_UpdatePreviousState_inEffect() {
  return (
    <div>
        <h4>E. Updating state based on previous state from an Effect </h4>
        <hr />
        <E1_usingDirectState />
        <E2_usingUpdaterFunction />
    </div>
  )
}

export default E_UpdatePreviousState_inEffect