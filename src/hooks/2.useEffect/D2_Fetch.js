import React, { useState, useEffect } from 'react'
import { myRequest } from './D1_api'

function D2_Fetch() {
    const [fruit, setFruit] = useState('')
    const [result, setResult] = useState()    
    useEffect(()=>{
      // Note the ignore variable which is initialized to false, and is set to true during cleanup. This ensures your code doesn’t suffer from “race conditions”: network responses may arrive in a different order than you sent them.
      let ignore = false;

      setResult(null)
      fetch(myRequest)
      // fetch("http://soundcloud.com/oembed?url=http%3A//soundcloud.com/forss/flickermood&format=json")
      // fetch("/api.json")
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          if(fruit){
            setResult(`${data.author_name}'s favorite fruit is ${fruit}`)
          }else{
            setResult(`${fruit}`)
          }
        }
      })
      
      // setResult(`${data.author_name}'s favorite fruit is ${fruit}`));
    
      return () => {
        ignore = true;
      }

    },[fruit])

  return (
    <div>
        <h5>1. Fetch</h5>
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

export default D2_Fetch