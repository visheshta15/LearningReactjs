import React from 'react'
import A_Form from './A_Form'
import B_TodoList from './B_TodoList'
import C_PassingInitialiser_Or_intialState from './C_PassingInitialiser_Or_intialState'

function UseReducer() {
  return (
    <div>
      <h1>useReducer</h1>
      <h5>useReducer is a React Hook that lets you add a reducer to your component.</h5>
      <h5>useReducer is very similar to useState, but it lets you move the state update logic from event handlers into a single function outside of your component</h5>
      <hr />
      <A_Form />
      <B_TodoList />
      <C_PassingInitialiser_Or_intialState />
    </div>
  )
}

export default UseReducer