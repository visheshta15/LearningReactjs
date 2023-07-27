import React from 'react'
import A1_Counter from './A1_Counter'
import lc from './lifecycle.png'
function ClassC() {
  return (
    <div>
        <h3>Class Component</h3>
        <A1_Counter />
        <h4>LifeCycle</h4>
        <img src={lc} alt="" width={700} />
    </div>
  )
}

export default ClassC