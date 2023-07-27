import React from 'react'
import { pure } from 'recompose';


function Heading_pure() {
    console.log('pure')
  return (
    <div>
        <p>pure...</p>
    </div>
  )
}

export default pure(Heading_pure)