// In the start, we created a function called UpdatedComponent that takes in an argument called OriginalComponent. In this case, the OriginalComponent will be the React element which will be wrapped
// Later on, we told React to render OriginalComponent to the UI. We will implement enhancement functionality later in this article

import React, { useState } from 'react'

function UpdatedComponent(OriginalComponent, text) {

    function NewComponent(){
      const [font, setfont] = useState(10)
      const incFont = () => {
        setfont(font+1)
      }
      return <OriginalComponent incFont={incFont} font={font} text={text}/>
    }
  return NewComponent
}

export default UpdatedComponent