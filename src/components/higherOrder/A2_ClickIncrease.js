import React, { useState } from 'react'

function A2_ClickIncrease() {
    const [fontSize, setFontSize] = useState(10);
  return (
    <div>
        <p>on Click</p>
        <p style={{fontSize}}>Size of font in on Click </p>
        <button onClick={()=>setFontSize(fontSize+1)}>Inc</button>
    </div>
  )
}

export default A2_ClickIncrease