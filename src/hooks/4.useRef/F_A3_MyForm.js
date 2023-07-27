import React, { useRef } from 'react'
import F_A4_MyInput from './F_A4_MyInput'

function F_A3_MyForm() {
    // This is how it works:
    // 1. <MyInput ref={inputRef} /> tells React to put the corresponding DOM node into inputRef.current. However, it’s up to the MyInput component to opt into that—by default, it doesn’t.
    // 2. The MyInput component is declared using forwardRef. This opts it into receiving the inputRef from above as the second ref argument which is declared after props.
    // 3. MyInput itself passes the ref it received to the <input> inside of it.

    const ref = useRef(null)
    const handleOnclick = () => {
        console.log(ref)
        ref.current.focus()
    }
  return (
    <div>
        <F_A4_MyInput ref={ref}/>
        <button onClick={handleOnclick}>Focus On Input</button>
    </div>
  )
}

export default F_A3_MyForm