import React, { useRef, useState } from 'react'

function A2_StopWatch() {
    // This example uses a combination of state and refs. Both startTime and now are state variables because they are used for rendering. But we also need to hold an interval ID so that we can stop the interval on button press. Since the interval ID is not used for rendering, it’s appropriate to keep it in a ref, and manually update it.
    const [startTime, setStartTime] = useState(null)
    const [now, setNow] = useState(null)
    const intervalref = useRef(null)

    const handleStart = () =>{
        setStartTime(Date.now())
        setNow(Date.now())
        clearInterval(intervalref.current)

        intervalref.current = setInterval(()=>{
            setNow(Date.now())
        },10)
    }
    const handleStop = () =>{
        clearInterval(intervalref.current)

    }

    let secPassed = 0
    if(startTime !== null && now !== null){
        secPassed = (now-startTime)/1000
    }

  return (
    <div>
        <h5>2. A stopwatch</h5>
        <p>Time passed <b>{secPassed.toFixed(3)}</b></p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <hr />
    </div>
  )
}

export default A2_StopWatch