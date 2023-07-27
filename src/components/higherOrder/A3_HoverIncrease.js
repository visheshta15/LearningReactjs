import React, { useState } from 'react'

function A3_HoverIncrease() {
    const [fontSize, setFontSize] = useState(10);
  return (
    <div>
        <p>On Hover</p>
        <p style={{fontSize}} onMouseOver={()=>setFontSize(fontSize+1)}>Size of font in on Click </p>
    </div>
  )
}

export default A3_HoverIncrease