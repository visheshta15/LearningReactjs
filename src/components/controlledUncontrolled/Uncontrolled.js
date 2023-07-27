import React, { useRef } from 'react'

function Uncontrolled() {
    const ref = useRef()
    const onSubmit = () =>{
        console.log(ref.current.value)
    }

  return (
    <div>
        <label htmlFor="name">Name : </label>
        <input type="text" ref={ref}/>
        <button onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default Uncontrolled