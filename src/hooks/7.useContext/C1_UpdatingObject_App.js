import React, { createContext, useState } from 'react'
import C2_Form from './C2_Form'
export const UserContext  = createContext(null)

function C1_UpdatingObject_App() {
    const [currentUser, setCurrentUser] = useState(null)

  return (
    <>
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            <C2_Form />
        </UserContext.Provider>
    </>
  )
}

export default C1_UpdatingObject_App