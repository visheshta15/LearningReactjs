import React, { useState } from 'react'
import B2_TodoList from './B2_TodoList'
import { createTodo } from './A4_utils'

function B1_App() {
    const [tab, setTab] = useState('all')
    const [isDark, setIsdark] = useState(false)
    const todos  = createTodo()
  return (
    <div>
        <button onClick={()=>setTab('all')}>All</button>
        <button onClick={()=>setTab('active')}>Active</button>
        <button onClick={()=>setTab('complete')}>Complete</button>
        <br />
        <label> 
            <input type="checkbox" onChange={(e)=> setIsdark(e.target.checked)}/>
            Dark Mode
        </label>
        <div className='todoDiv'>
          <B2_TodoList
            todos={todos}
            tab={tab}
            theme={isDark ? 'teal' : 'yellow'}
          />
        </div>
        <hr />
    </div>
  )
}

export default B1_App