import React from 'react'

function C2_PassingInitiakState() {
    // passing the initial state directly
    // const [stateList, dispatch] = useReducer(reducer1, createInitialState(userName));
  return (
    <div>
        <h5>2. Passing the initial state directly</h5>
        <p>This example does not pass the initializer function, so the createInitialState function runs on every render, such as when you type into the input. There is no observable difference in behavior, but this code is less efficient.</p>
        <hr />  
    </div>
  )
}

export default C2_PassingInitiakState