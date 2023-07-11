// In this example, the Reset button changes the version state variable, which we pass as a key to the Form. When the key changes, React re-creates the Form component (and all of its children) from scratch, so its state gets reset.

import React from 'react'
import { useState } from 'react'
import E1_Form from './E1_Form'
import E2_child from './E2_child'

function E_ResetStateWith_Key() {
    const [version, setVersion] = useState(0)
    const [inputname, setInputname] = useState('')

  return (
    <div>
        <h4>Resetting state with a key ---------------------------------------------------------------------------</h4>
        <h5>You can reset a component’s state by passing a different key to a component</h5>
        <button onClick={()=> setVersion(version+1)}>Reset</button><br />
        <E1_Form key={version}/>

        <hr />
        <h5>Storing information from previous renders</h5>
        <input type="text" value={inputname} onChange={(e)=> setInputname(e.target.value)}/>
        <E2_child name={inputname}/>
        <hr />
    </div>
  )
}

export default E_ResetStateWith_Key