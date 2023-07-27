import React, { useRef } from 'react'
import F_A2_MyInput from './F_A2_MyInput'

function F_A1_MyForm() {
    const ref = useRef(null)
    const handleOnclick = () => {
        ref.current.focus()
    }
  return (
    <div>
        <F_A2_MyInput ref={ref}/>
        <button onClick={handleOnclick}>Focus On Input</button>
    </div>
  )
}

export default F_A1_MyForm