import React, { useReducer } from 'react'
import { createInitialState, reducer1 } from './C3_reducer';

function C1_PassingInitialFunc() {
    // Notice that you’re passing createInitialState, which is the function itself, and not createInitialState(), which is the result of calling it. This way, the initial state does not get re-created after initialization.
    const userName = 'Visheshta'
    
    // passing initailiser function 
    const [stateList, dispatch] = useReducer(reducer1, userName, createInitialState);
    
    // passing the initial state directly
    // const [stateList, dispatch] = useReducer(reducer1, createInitialState(userName));

    const handleOnchange = (e) =>{
        dispatch({
            type: 'CHANGEDRAFT',
            payload: e.target.value
        })
    }
    const handleBtnClick = () =>{
        dispatch({
            type: 'ADDITEM'
        })

    }
    console.log(stateList)
  return (
    <div>
        <h5>1. Passing an initializer function</h5>
        <input type="text" value={stateList.draft} onChange={handleOnchange} />
        <button onClick={()=>dispatch({type: 'ADDITEM'})}>Add</button>
        {stateList.todos.map((ele, index)=>
            <p key={ele.id}>{}{ele.text}</p>
        )}
        <hr />
    </div>
  )
}

export default C1_PassingInitialFunc