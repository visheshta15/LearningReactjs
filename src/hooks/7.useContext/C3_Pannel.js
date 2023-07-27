import React from 'react'

function C3_Pannel({title, children}) {
  return (
    <div className='contextApp'>
        <p>{title}</p>
        {children}
    </div>
  )
}

export default C3_Pannel