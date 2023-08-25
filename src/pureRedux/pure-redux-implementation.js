const {createStore} = require('redux');

// --------reducer 
const initialState = {
    age: 5
}

const reducerFunction = (state=initialState, action) =>{
    // const newState = {...state}
    switch(action.type){
        case "ADD":
            return {...state, age: state.age+ action.payload}
        case "SUB":
            return {...state, age: state.age - action.payload}
        case "MUL":
            return {...state, age: state.age * action.payload}
        default:
            return {...state}
    }
}


// ------------store 
const store = createStore(reducerFunction)
// whenever there is change in state it should tell me 
store.subscribe(()=>{
    console.log('state change : ', store.getState());
})


// --------------dispatch 
store.dispatch({type : "ADD", payload: 2});
store.dispatch({type : "SUB", payload: 1});
store.dispatch({type : "MUL", payload: 5});

