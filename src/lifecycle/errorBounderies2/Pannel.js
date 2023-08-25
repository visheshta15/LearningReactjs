import React from 'react'
import useAsyncLoader from '../../hooks/8.customHooks/hook2/useAsyncLoader'
import ErrorBoundary from './ErrorBoundary'
import ErrorFallback from './ErrorFallback'
// import useAsyncLoader from './useAsyncLoader'
function Pannel() {
    const data = useAsyncLoader(()=>  fetch("https://jsonplaceholder.jhkj/"))
    // const data = useAsyncLoader(()=>  fetch("https://jsonplaceholder.typicode.com/users"))
    console.log(data)
  return (
    <div>
        <ErrorBoundary>
            {data?.value && <div>{data?.value && data.value.toString()}</div>}
            {data?.error && (
                <ErrorFallback 
                    error={data.error}
                    resetErrorBoundary={""}
                />
            )}
        </ErrorBoundary>
    </div>
  )
}

export default Pannel