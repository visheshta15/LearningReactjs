import React, {useState} from 'react'
import CFCounter from './CFCounter'

function AppFC() {
    const [number, setNumber] = useState(0)
  return (
    <div>
        <button onClick={(e)=> setNumber(number+1)}>INcre</button>
        <CFCounter number={number}/>
    </div>
  )
}

export default AppFC