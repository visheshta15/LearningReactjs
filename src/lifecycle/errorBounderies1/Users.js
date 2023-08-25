import React, { useEffect, useState } from 'react'
import withErrorBoundaries from './withErrorBoundaries'

function Users(props) {
    const [users, setUsers] = useState(null)
    useEffect(()=>{
        // fetch("https://jsonplaceholder.typicode.com/user")
        // fetch("https://jsonplaceholder.jhkj/")
        // .then((res)=> res.json())
        // .then((data)=> setUsers(data.map((ele)=> ele.username)))
        // .catch(() => setError("error while fetching users"))
    },[])
    const handleClick = ()=>{
        // fetch("https://jsonplaceholder.jhkj/")
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data)=> setUsers(data.map((ele)=> ele.username)))
        // .catch((error) => props.setError(error))
    }
  return (
    <div>
       <button onClick={handleClick}>hi</button>
       {users && users.map((ele)=> <p>{ele}</p>)}
    </div>
  )
}

export default withErrorBoundaries(Users)