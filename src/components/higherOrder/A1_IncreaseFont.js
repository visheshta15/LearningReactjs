import React from 'react'
import A2_ClickIncrease from './A2_ClickIncrease'
import A3_HoverIncrease from './A3_HoverIncrease'
import A4_ClickIncrease_hoc from './A4_ClickIncrease_hoc'
import A5_HoverIncrease_hoc from './A5_HoverIncrease_hoc'

function A1_IncreaseFont() {
  return (
    <div>
        <h4>Increase font</h4>
        <h5>1. without hoc</h5>
        <A2_ClickIncrease />
        <A3_HoverIncrease />
        <hr />
        <h5>1. with hoc</h5>
        <A4_ClickIncrease_hoc />
        <A5_HoverIncrease_hoc />
    </div>
  )
}

export default A1_IncreaseFont