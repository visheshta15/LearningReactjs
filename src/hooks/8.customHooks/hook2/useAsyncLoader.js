import React, { useState, useEffect } from 'react'

function useAsyncLoader(resquestFn) {
    const [data , setValue] = useState({error : null, value : null})

    useEffect(() => {
        let canceled = false 
         resquestFn()
            .then((res)=> res.json())
            .then((resdata)=> setValue({...data, value: resdata}))
            .catch((err)=> setValue({...data, error: err}))
        
        return ()=>{
            canceled = true
        }
        
    }, [])
    
    return data;
}

export default useAsyncLoader