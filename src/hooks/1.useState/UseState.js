import React from 'react'
import A_UseStateExp from './A_UseStateExp'
import B_PassingUpdaterFunc from './B_PassingUpdaterFunc'
import C_PassingObjectArray from './C_PassingObjectArray'
import D_PassingInitialiser_intialState from './D_PassingInitialiser_intialState'
import E_ResetStateWith_Key from './E_ResetStateWith_Key'
import F_TroubleshootingExp from './F_TroubleshootingExp'


function UseState() {
  return (
    <div>
      <h1>useState</h1>
      <h5>useState is a React Hook that lets you add a state variable to your component.</h5>
      <A_UseStateExp />
      <B_PassingUpdaterFunc />
      <C_PassingObjectArray />
      <D_PassingInitialiser_intialState />
      <E_ResetStateWith_Key />
      <F_TroubleshootingExp />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default UseState