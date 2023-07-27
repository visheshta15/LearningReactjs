export const reducer1 = (state, action) =>{
    switch (action.type){
        case 'CHANGEDRAFT': {
            return {...state, draft: action.payload}
        }
        case 'ADDITEM' : {
            return {
                ...state, todos : [...state.todos, {id: state.todos.length+1, text: `${state.draft} item # ${state.todos.length+1}`}]
            }
        }
        default :
            return {...state }
    }

}

export const createInitialState = (userName) =>{
    const initailTodo = []
    for (let i =0; i<10; i++){
        initailTodo.push({
            id: i,
            text: `${userName} item # ${i+1}`
        })
    }
    return {
        draft: '',
        todos: initailTodo
    }
}