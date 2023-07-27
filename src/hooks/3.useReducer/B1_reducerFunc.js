export function reducer(state, action){
    switch(action.type){
        case 'ADD': {
            return [
                ...state,
                {id: state.length, text: action.payload.item, quantity: action.payload.quantity, done: false}
            ]
        }
        case 'COMPLETE' : {
            return state.map((ele)=> {
                if(ele.id === action.payload){
                    return {...ele, done: !ele.done}
                }else{
                    return ele
                }
            })
        }
        case 'DELETE' : {
            return state.filter((ele)=> ele.id !== action.payload)
        }
        case 'EDIT' : {
            return state.map((ele)=> {
                if(ele.id === action.payload.id){
                    return {...ele, text: action.payload.item, quantity: action.payload.quantity }
                }else{
                    return ele
                }
            })
        }
        default : {
            return [...state]
        }
        
    }
}

export const initialState = [
    { id: 0, text: 'Eggs', quantity: '10', done: true },
    { id: 1, text: 'bread', quantity: '1', done: false },
    { id: 2, text: 'Onion', quantity: '2kg', done: false }
]