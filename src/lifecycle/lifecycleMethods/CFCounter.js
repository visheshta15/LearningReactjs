import React , {useEffect} from 'react'

function CFCounter({number}) {

    // componentmount
    useEffect(()=>{
        console.log("component is mounted");
    },[])

    // componentDidUpadate
    useEffect(()=>{
        console.log("component did update");
    },[number])
    
    // componentDidUpadate
    useEffect(()=>{
        return () =>{
            console.log("component will unmount");
        }
    },[number])



  return (
    <div>
        <h6>{number}</h6>
    </div>
  )
}

export default CFCounter