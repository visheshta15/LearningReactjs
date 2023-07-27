import React from 'react'
import C3_Pannel from './C3_Pannel'
import C4_Button from './C4_LoginButton'
import C4_LoginButton from './C4_LoginButton'

function C2_Form() {
  return (
    <>
        <C3_Pannel title={"Hello, Let's Get Inside"}>
            <C4_LoginButton />
        </C3_Pannel>
    </>
  )
}

export default C2_Form