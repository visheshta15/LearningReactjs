import React, { memo} from 'react'

const Heading_memo = memo(() => {
    console.log('memo')
  return (
    <div>
        <p>memo</p>
    </div>
  )
})

export default (Heading_memo)