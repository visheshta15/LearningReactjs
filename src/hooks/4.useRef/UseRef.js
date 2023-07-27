import React from 'react'
import A_ReferencingAValue from './A_ReferencingAValue_withRef'
import B_ManipulatingDOM_withRef from './B_ManipulatingDOM_withRef'
import F_A_AccessOtherComponentDOM from './F_A_AccessOtherComponentDOM'

function UseRef() {
  return (
    <div>
      <h1>useRef</h1>
      <h5>useRef is a React Hook that lets you reference a value that's not needed for rendering.</h5>
      <hr />
      <A_ReferencingAValue />
      <B_ManipulatingDOM_withRef />

      <h1>forwardRef</h1>
      <h5>forwardRef lets your component expose a DOM node to parent component with a ref.</h5>
      <hr />
      <F_A_AccessOtherComponentDOM />
    </div>
  )
}

export default UseRef