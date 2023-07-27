import React , { useMemo, useState } from 'react'
import {filterTodos } from './B4_utils'
import B3_List from './B3_List'
import B3_List_pure from './B3_List_pure'
import B3_List_memo from './B3_List_memo'


function B2_TodoList({todos, tab, theme}) {
  const visibleTodo = useMemo(() => filterTodos(todos, tab) , [todos, tab])
  const [userInput, setuserInput] = useState('')
  
  return (
    <div style={{background: theme}}>
        <input type="text" value={userInput} onChange={(e)=> {setuserInput(e.target.value)} }/>
        <B3_List todo={visibleTodo}/>
        {/* <B3_List_pure todo={visibleTodo}/> */}
        {/* <B3_List_memo todo={visibleTodo}/> */}
    </div>
  )
}

export default B2_TodoList