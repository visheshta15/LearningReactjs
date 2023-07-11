import React from 'react'
import { useState } from 'react'

function E2_child({name}) {
  const [previousname, setPreviousname] = useState(null)
  if(name !== previousname){
    console.log("name", name, previousname)
    console.log("name1", previousname)
    setPreviousname(name)
  }
  
  return (
    <div>
    {name}
    </div>
  )
}

export default E2_child