import React, { useRef } from 'react'

function B1_FocusingTextInput() {
    const ref = useRef(null)
    const handleOnclick = () => {
        console.log(ref.current)
        ref.current.focus()
    
    }
  return (
    <div>
        <h5>1. Focusing a text input </h5>
        <input type="text" ref={ref}/>
        <button onClick={handleOnclick}>Focus the input</button>
        <hr />
    </div>
  )
}

export default B1_FocusingTextInput