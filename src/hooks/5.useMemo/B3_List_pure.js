import React from 'react'
import { pure } from 'recompose';

function B3_List_pure({todo}) {
    console.log('list')
    return (
        <div>
            <ul>
                {todo.map((ele)=><li key={ele.id}>{ele.text}</li>)}
            </ul>
        </div>
    )
}

export default pure(B3_List_pure)