import React from 'react'
import { useParams } from 'react-router-dom'
function Name() {
    const {name} = useParams()
  return (
    <div>Name : {name}</div>
  )
}

export default Name