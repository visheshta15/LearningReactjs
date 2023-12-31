import React from 'react'
import './hooks.css'

import UseState from './1.useState/UseState'
import UseEffect from './2.useEffect/UseEffect'
import UseReducer from './3.useReducer/UseReducer'
import UseRef from './4.useRef/UseRef'
import UseContext from './7.useContext/UseContext'
import UseMemo from './5.useMemo/UseMemo'
import CustomHook from './8.customHooks/CustomHook'

function Hooks() {
  return (
    <div>
        {/* <UseState /> */}
        {/* <UseEffect /> */}
        {/* <UseReducer /> */}
        {/* <UseRef /> */}
        {/* <UseContext /> */}
        {/* <UseMemo /> */}
        <CustomHook />
    </div>
  )
}

export default Hooks