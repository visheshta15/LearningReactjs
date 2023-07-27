import React from 'react'
import B1_FocusingTextInput from './B1_FocusingTextInput'
import B2_ScrollingImageIntoView from './B2_ScrollingImageIntoView'
import B3_PlayingPausingVideo from './B3_PlayingPausingVideo'

function B_ManipulatingDOM_withRef() {
  return (
    <div>
        <h4>B. Manipulating the DOM with useRef</h4>
        <B1_FocusingTextInput />
        <B2_ScrollingImageIntoView />
        <B3_PlayingPausingVideo />
    </div>
  )
}

export default B_ManipulatingDOM_withRef