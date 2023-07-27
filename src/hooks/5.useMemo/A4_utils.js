export function createTodo(){
    const todos = []
    for(let i=0; i<20; i++){
        todos.push({
            id: i,
            text: `Todo - ${i+1}`,
            complete: i%2
        })
    }
    return todos
}

export function filterTodos(todos, tab){
    console.log('[ARTIFICIALLY SLOW] Filtering ' + todos.length + ' todos for "' + tab + '" tab.');
    let startTime = performance.now();
    while (performance.now() - startTime < 500) {
        // Do nothing for 500 ms to emulate extremely slow code
    }

    let filterArr = []
    if(tab === 'all'){
        filterArr = [...todos]
    } else if (tab === 'active'){
        filterArr = todos.filter((ele)=> !ele.complete)
    } else if (tab === 'complete'){
        filterArr = todos.filter((ele)=> ele.complete)
    }
    return filterArr
}