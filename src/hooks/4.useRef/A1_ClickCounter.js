import React, { useRef } from "react"

function A1_ClickCounter() {
    let ref = useRef(0)
    const handleOnclick = () =>{
        console.log(ref)
        ref.current +=1
    }
  return (
    <div>
        <h5>1. Click counter</h5>
        <p>This component uses a ref to keep track of how many times the button was clicked. Note that it's okay to use a ref instead of state here because the click count is only read and written in an event handler.</p>
        <button onClick={handleOnclick}>Click ME!</button>
        <hr />
    </div>
  )
}

export default A1_ClickCounter