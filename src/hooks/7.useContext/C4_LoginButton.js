import React, { useContext, useRef } from 'react'
import { UserContext } from './C1_UpdatingObject_App'

function C4_LoginButton() {
  const ref = useRef(null)
  const {currentUser, setCurrentUser} = useContext(UserContext)
  const handleClick = () =>{
    setCurrentUser(ref.current.value)
  }

  return (
    <div>
      {currentUser ? (
        <p>{`Welcome ${currentUser}`}</p>
      ): (
        <>
        <input type="text"  ref={ref}/>
        <button onClick={handleClick}>Login</button>
        </>
      )}
    </div>
  )
}

export default C4_LoginButton