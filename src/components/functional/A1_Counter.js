// These are simply JavaScript functions. We can create a functional component to React by writing a JavaScript function

import React, { useState } from 'react'

function A1_Counter() {
    const [count, setCounter] = useState(0)
  return (
    <div>
        <p>Counter App using Functional Component :</p>
        <p>{count}</p>
        <button onClick={()=>setCounter(count +1 )}>Inc</button>
    </div>
  )
}

export default A1_Counter