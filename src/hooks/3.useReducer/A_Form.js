import React , {useReducer} from 'react'
import { initialState, reducer } from './A1_reducerFunc'

function A_Form() {
    const [state, dispatch] = useReducer(reducer, initialState )

    const handleNameChange = (e) => {
        dispatch({
            type: 'NAME',
            payload: e.target.value
        })
    }

    const handleAgeInc = () => {
        dispatch({
            type: 'AGEINC'
        })
    }

  return (
    <div>
        <h3>Usage</h3>
        <h4>A. Form update</h4>
        <p>the reducer manages a state object with two fields: name and age.</p>

        <input type="text" value={state.name} onChange={handleNameChange}/>
        <button onClick={handleAgeInc}>Increment Age</button>
        <p>{`Hello, ${state.name}!!!. You are ${state.age}`}</p>

        <hr />
    </div>
  )
}

export default A_Form