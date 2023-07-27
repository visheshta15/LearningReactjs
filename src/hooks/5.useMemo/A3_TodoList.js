import React , { useMemo } from 'react'
import {filterTodos } from './A4_utils'


function A3_TodoList({todos, tab, theme}) {
  // const visibleTodo = useMemo(() => filterTodos(todos, tab) , [todos, tab])

  // Always recalculating a value
  const visibleTodo = filterTodos(todos, tab)
  
  return (
    <div style={{background: theme}}>
        <ul>
          {visibleTodo.map((ele)=> <li key={ele.id}>{ele.complete ? <s>{ele.text}</s> : ele.text }</li>)}
        </ul>
    </div>
  )
}

export default A3_TodoList