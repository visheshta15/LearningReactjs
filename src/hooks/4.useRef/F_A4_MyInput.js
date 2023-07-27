import React, { forwardRef } from 'react'

const F_A4_MyInput = forwardRef((props, ref) => {
    console.log(ref)
  return (
    <div>
        <input type="text" {...props} ref={ref}/>
    </div>
  )
})

export default F_A4_MyInput