import React from 'react'
import { useState } from 'react'

function F_TroubleshootingExp() {
    const [count, setCount] = useState(0)
    const handleCount= () =>{
        console.log('before Inc count:', count)
        setCount(count+1)
        console.log('after Inc count:', count)

        setTimeout(()=>{
            setCount(count +1)
            console.log(count)
        },1000)
    }

   
    // const [fn, setFn] = useState(someFunction);

    // function handleClick() {
    //     setFn(someOtherFunction);
    // }   
    // Because you’re passing a function, React assumes that someFunction is an initializer function, and that someOtherFunction is an updater function, so it tries to call them and store the result. To actually store a function, you have to put () => before them in both cases. Then React will store the functions you pass.
    const function1 = () => console.log('func1')
    const function2 = () => console.log('func2')
    const [var1, setvar1] = useState(function1)
    const [var2, setvar2] = useState(()=>function2)


    function handleclick() {
        setvar1(function1)
        setvar2(()=> function2)
    }
  return (
    <div>
        <h4>Troubleshooting--------------------------------------------------------------------------------------</h4>

        <h5>I've updated the state, but logging gives me the old value</h5>
        <button onClick={handleCount}>Inc Count</button>
        <p>{count}</p>

        <h5>I'm trying to set state to a function, but it gets called instead</h5>
        <button onClick={handleclick}>Call Func</button>
    </div>
  )
}

export default F_TroubleshootingExp