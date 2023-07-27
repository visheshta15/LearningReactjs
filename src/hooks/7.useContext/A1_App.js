import React, { createContext } from 'react'
import A2_Form from './A2_Form'

const ThemeContext = createContext(null)

function A1_App() {
  return (
    <>
        <ThemeContext.Provider value='pink'>
            <A2_Form />
        </ThemeContext.Provider>
        <hr />
    </>
  )
}

export {ThemeContext};
export default A1_App;
