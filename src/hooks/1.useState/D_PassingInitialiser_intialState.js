import React from 'react'
import { useState } from 'react'


function D_PassingInitialiser_intialState() {
    const todolist = []
    const createInitialTodoList = () =>{
        for(let i=0; i<10; i++){
            todolist.push({id:i, text: 'Item ' + (i+1)})
        }
        console.log(todolist)
        return todolist
    }
    // Although the result of createInitialTodos() is only used for the initial render, you’re still calling this function on every render. This can be wasteful if it’s creating large arrays or performing expensive calculations.
    // const [todos, settodos] = useState(createInitialTodoList())

    // Notice that you’re passing createInitialTodos, which is the function itself, and not createInitialTodos(), which is the result of calling it. If you pass a function to useState, React will only call it during initialization.
    // passes the initializer function, so the createInitialTodos function only runs during initialization. It does not run when component re-renders, such as when you type into the input.
    const [todos, settodos] = useState(createInitialTodoList)

    const [addItem, setAddItem] = useState('')
    const handleAddTodo = () => {
        console.log('add')
        settodos([...todos, {id:todos.length, text: `item ${todos.length +1}`}])
    }
    // console.log(todos)
  return (
    <div>
        <h4>The difference between passing an initializer and passing the initial state directly---------------------------------------</h4>
        <input type="text" value={addItem} onChange={(e)=> setAddItem(e.target.value)} />
        <button onClick={handleAddTodo}>Add</button>
        {todos.map((ele)=>(
            <p key={ele.id}>{`${ele.id +1}.   ${ele.text}`}</p>
        ))}
        <hr />

    </div>
  )
}

export default D_PassingInitialiser_intialState