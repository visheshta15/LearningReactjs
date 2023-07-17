import React, { useEffect, useState } from 'react'

function E2_usingUpdaterFunction() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    setInterval(()=>{
      setCount((c) => c+1)
    },1000)

  },[count])
  // console.log(count)

  return (
    <div>
        <h5>2. Passing state updater to setCount</h5>
        <p>{`Counter: `} {count}</p>
        <p>{`Now that you're passing c => c + 1 instead of count + 1, your Effect no longer needs to depend on count. As a result of this fix, it won't need to cleanup and setup the interval again every time the count changes.`}</p>
        <hr />
    </div>
  )
}

export default E2_usingUpdaterFunction