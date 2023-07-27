import React from 'react'
import C1_PassingInitialFunc from './C1_PassingInitialFunc'
import C2_PassingInitiakState from './C2_PassingInitiakState'

function C_PassingInitialiser_Or_intialState() {
  return (
    <div>
        <h4>C. Avoiding recreating the initial state</h4>
        <C1_PassingInitialFunc />
        <C2_PassingInitiakState />
    </div>
  )
}

export default C_PassingInitialiser_Or_intialState