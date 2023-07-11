import React from 'react'
import { useState } from 'react'

function E1_Form() {
    const [name, setName] = useState("")
  return (
    <div>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
        <p>Hello, {name}</p>
    </div>
  )
}

export default E1_Form
