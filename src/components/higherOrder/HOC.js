import React from 'react'
import A1_IncreaseFont from './A1_IncreaseFont'
import B1_Warning from './B1_Warning'
import B2_Error from './B2_Error'

function HOC() {
  return (
    <div>
      <h3>Higher Order Component- HOC</h3>
      <A1_IncreaseFont />
      <hr />
      <h5>3. Status</h5>
      <B1_Warning />
      <B2_Error />
    </div>
  )
}

export default HOC