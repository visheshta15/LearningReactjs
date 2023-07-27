import React from 'react'
import A_PassingData_DeeplyIntoTree from './A_PassingData_DeeplyIntoTree'
import B_UpdatingData_PassedViaContext from './B_UpdatingData_PassedViaContext'

function UseContext() {
  return (
    <div>
        <h1>useContext</h1>
        <h5>React Context is a way to manage state globally.</h5>
        <hr />
        <A_PassingData_DeeplyIntoTree />
        <B_UpdatingData_PassedViaContext />
    </div>
  )
}

export default UseContext