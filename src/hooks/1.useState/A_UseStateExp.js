import React from 'react'
import { useState } from 'react'

function A_UseStateExp() {const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [inputVal, setInputVal] = useState('hi ')
    const [likeCheckbox, setLikeCheckbox] = useState(false)
  
    const handleBtnClick = () => {
      setCount(count+1)
    }
    const handleInputChange=(e)=>{
      console.log(e.target.value)
      setInputVal(e.target.value)
    }
    const handleReset = () => {
      setInputVal('hi ')
    }
    const handleCheckboxClick = () => {
      setLikeCheckbox(!likeCheckbox)
    }
  
    return (
      <div>
        <h4>useState basic example---------------------------------------------------------------------------</h4>
        <button onClick={handleBtnClick}>You pressed me {count} times</button>
        <button onClick={()=> setCount1(count1+1)}>You pressed me {count1} times</button>
        <hr />
  
        <input type="text" value={inputVal} onChange={handleInputChange}/>
        <button onClick={handleReset}>Reset</button>
        <hr />
  
        <input type="checkbox" id='likeBox' onChange={handleCheckboxClick} />
        <label htmlFor="likeBox">Do I like this ?</label>
        <p>{likeCheckbox? 'Yes' : 'No'}</p>
        <hr />

      </div>
  )
}

export default A_UseStateExp