import React from 'react'
import A_ConnectingToExternalSystem from './A_ConnectingToExternalSystem'
import B_WrappingEffectsIn_CustomHooks from './B_WrappingEffectsIn_CustomHooks'
import C_ControllingNonReact_widget from './C1_ControllingNonReact_widget'
import D_FetchingData_Async_withEffects from './D_FetchingData_Async_withEffects'
import E_UpdatePreviousState_inEffect from './E_UpdatePreviousState_inEffect'

function UseEffect() {
  return (
    <div>
        <h1>useEffect</h1>
        <h5>This hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. lets you synchronize a component with an external system.</h5>
        {/* <A_ConnectingToExternalSystem /> */}
        {/* <B_WrappingEffectsIn_CustomHooks />
        <C_ControllingNonReact_widget /> */}
        {/* <D_FetchingData_Async_withEffects /> */}
        {/* <E_UpdatePreviousState_inEffect /> */}
    </div>
  )
}

export default UseEffect