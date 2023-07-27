export function reducer(state, action){
    switch(action.type){
        case 'NAME': {
            return {
                name: action.payload,
                age: state.age
            }
        }
        case 'AGEINC': {
            return {
                name: state.name,
                age: state.age +1 
            }
        }
            
    }
    throw Error('Unkown action: ', action.type)
}

export const initialState = {
    name: 'vish',
    age: 26
}