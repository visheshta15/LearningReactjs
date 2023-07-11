// The difference between passing an updater and passing the next state directly
// 1. passing the next state directly
// the set function does not update the age state variable in the already running code. So each setAge(age + 1) call becomes setAge(43).

// 2. passing an updater
// updater function. It takes the pending state and calculates the next state from it

import React from 'react'
import { useState } from 'react'


function B_PassingUpdaterFunc() {
    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(count+1)
    }
    const handleBtnClick = () =>{
        // the set function does not update the age state variable in the already running code. So each setAge(age + 1) call becomes setAge(43).
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
    }
    const handleUpdateFunc = () =>{
        // updater function. It takes the pending state and calculates the next state from it
        setCount(a => a+1)
        setCount(a => a+1)
        setCount(a => a+1)
    }

  return (
    <div>
        <h4>Passing the updater function in setState---------------------------------------------------------------------------</h4>
        <button onClick={handleUpdateFunc}>+3 passing updater function</button>
        <button onClick={handleBtnClick}>+3 passing next state directly</button>
        <button onClick={()=>{
            increment()
            increment()
            increment()

        }}>+3 passing next state directly</button>
        <p>increment count {count}</p>
        <hr />
    </div>
  )
}

export default B_PassingUpdaterFunc