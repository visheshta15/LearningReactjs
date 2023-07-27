import React from 'react'
import {ThemeContext} from './A1_App'


function A3_Pannel({title, children}) {
  return (
    <>
      <ThemeContext.Consumer >
        {(val)=>
          <>
            <p style={{color: val, fontWeight: "bold"}}>{title}</p>
            {children}
          </>
        }
      </ThemeContext.Consumer>  
    </>
  )
}

export default A3_Pannel