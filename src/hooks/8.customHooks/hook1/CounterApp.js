import React from 'react'
import useCounter from './useCounter'

function CounterApp() {
    const {count,increment,decrement} = useCounter(5)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>inc</button>
        <button onClick={decrement}>dec</button>
    </div>
  )
}

export default CounterApp