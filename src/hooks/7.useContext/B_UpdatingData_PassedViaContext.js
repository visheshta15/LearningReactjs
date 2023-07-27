import React from 'react'
import B1_UpdatingValue_App from './B1_UpdatingValue_App'
import C1_UpdatingObject_App from './C1_UpdatingObject_App'
import D1_MultipleContexts_App from './D1_MultipleContexts_App'

function B_UpdatingData_PassedViaContext() {
  return (
    <div>
        <h3>Updating data passed via context</h3>
        
        <h4>1. Updating a value via context</h4>
        <B1_UpdatingValue_App />
        <hr />

        <h4>2. Updating an object via context</h4>
        <C1_UpdatingObject_App />
        <hr />

        <h4>3.  Multiple contexts</h4>
        <D1_MultipleContexts_App />
        <hr />


    </div>
  )
}

export default B_UpdatingData_PassedViaContext