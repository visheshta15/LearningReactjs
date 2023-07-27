import React, { useContext } from 'react'
import { ThemeContext } from './B1_UpdatingValue_App'

function B3_Pannel({title, children}) {
    const theme = useContext(ThemeContext)
  return (
    <div className='contextApp' style={{background: theme}}>
        <p>{title}</p>
        {children}
    </div>
  )
}

export default B3_Pannel