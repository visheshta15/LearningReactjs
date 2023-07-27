import React, { useContext } from 'react'
import {ThemeContext} from './A1_App'

function A4_Button({children}) {
    const theme = useContext(ThemeContext)
  return (
    <div>
        <button style={{background: theme}}>{children}</button>
    </div>
  )
}

export default A4_Button