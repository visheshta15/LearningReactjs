import React, { useState, useEffect } from 'react'
import { myRequest } from './D1_api'

function D3_AsyncAwait() {
    const [fruit, setFruit] = useState('')
    const [result, setResult] = useState()    
    useEffect(()=>{
      async function startFetching(){
        await fetch(myRequest)
        .then((res) => res.json())
        .then((res)=> setResult(fruit))
      }

      let ignore = false;
      startFetching()
      return () => {
        ignore = true;
      }

    },[fruit])

  return (
    <div>
        <h5>2. Async-Await </h5>
        <label htmlFor="fruit"></label>
        <select id="fruit" value={fruit} onChange={(e)=> setFruit(e.target.value)}>
            <option value=""></option>
            <option value="apple">Apple</option>
            <option value="mango">Mango</option>
            <option value="banana">Banana</option>
        </select>
        <p>{result ?? 'Loading...'}</p>
        <img src="" alt="" />
        <hr />
    </div>
  )
}

export default D3_AsyncAwait