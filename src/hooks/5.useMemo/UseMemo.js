import React from 'react'
import A_SkippingExpensiveRecalculations from './A_SkippingExpensiveRecalculations'
import B_Skipping_ReRendering from './B_Skipping_ReRendering'

function UseMemo() {
  return (
    <div>
        <h1>useMemo</h1>
        <hr />
        {/* <A_SkippingExpensiveRecalculations /> */}
        <B_Skipping_ReRendering />
    </div>
  )
}

export default UseMemo