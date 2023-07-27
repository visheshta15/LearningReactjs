import React from 'react'
import B1_App from './B1_App'

function B_Skipping_ReRendering() {
  return (
    <div>
        <h3>2. Skipping re-rendering of components with useMemo and memo</h3>
        <B1_App />
    </div>
  )
}

export default B_Skipping_ReRendering