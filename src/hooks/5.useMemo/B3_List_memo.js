import React , { memo } from 'react'

const B3_List_memo = memo(({todo}) => {
    console.log('list')
  return (
    <div>
        <ul>
            {todo.map((ele)=><li key={ele.id}>{ele.text}</li>)}
        </ul>
    </div>
  )
})

export default B3_List_memo