import React from 'react'
import useAsyncLoader from './useAsyncLoader'
function AsyncLoaderApp() {
    // const data = useAsyncLoader(()=>  fetch("https://jsonplaceholder.jhkj/"))
    const data = useAsyncLoader(()=>  fetch("https://jsonplaceholder.typicode.com/users"))
    console.log(data)
  return (
    <div>
        {data?.error ? (
            <div>{data.error.toString()}</div>
        ) : (
            <div>{data?.value && data.value.toString()}</div>
        )}
    </div>
  )
}

export default AsyncLoaderApp