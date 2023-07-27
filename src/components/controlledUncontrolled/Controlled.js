import React, { useState } from 'react'

function Controlled() {
    const [text, setText] = useState('')
    const onSubmit = () => {
        console.log(text)
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name : </label>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default Controlled