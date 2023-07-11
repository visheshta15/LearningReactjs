import React from 'react'
import A_ConnectingToExternalSystem from './A_ConnectingToExternalSystem'

function UseEffect() {
  return (
    <div>
        <h1>useEffect</h1>
        <h5>This hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. lets you synchronize a component with an external system.</h5>
        <A_ConnectingToExternalSystem />
    </div>
  )
}

export default UseEffect