// In this example, the MyApp component holds a state variable which is then passed to the ThemeContext provider. Checking the “Dark mode” checkbox updates the state. Changing the provided value re-renders all the components using that context.

import React, { createContext, useState } from 'react'
import B2_Form from './B2_Form'

export const ThemeContext = createContext(null)

function B1_UpdatingValue_App() {
  const [theme, setTheme] = useState('lightgrey')
  return (
    <>
        <ThemeContext.Provider value={theme}>
            <B2_Form />
            <label>
              <input type="checkbox" onChange={(e)=> e.target.checked ? setTheme('teal') : setTheme('lightblue')} />
              Dark mode
            </label>
        </ThemeContext.Provider>
    </>
  )
}

export default B1_UpdatingValue_App