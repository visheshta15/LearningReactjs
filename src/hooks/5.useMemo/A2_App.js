import React, { useState } from 'react'
import A3_TodoList from './A3_TodoList'
import { createTodo } from './A4_utils'

function A2_App() {
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
          <A3_TodoList
            todos={todos}
            tab={tab}
            theme={isDark ? 'gray' : 'pink'}
          />
        </div>
        <hr />
    </div>
  )
}

export default A2_App