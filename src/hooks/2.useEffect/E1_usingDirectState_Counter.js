import React ,{ useEffect, useState } from 'react'

function E1_usingDirectState() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setCount(count+1)
    },1000)

    return () => clearInterval(intervalId)
  },[count])
  // console.log(count)
  return (
    <div>
        <h5>1. When you want to update state based on previous state from an Effect</h5>
        <p>{`Counter: ${count}`}</p>
        <p>Since count is a reactive value, it must be specified in the list of dependencies. However, that causes the Effect to cleanup and setup again every time the count changes. This is not ideal.</p>
        <hr />
    </div>
  )
}

export default E1_usingDirectState