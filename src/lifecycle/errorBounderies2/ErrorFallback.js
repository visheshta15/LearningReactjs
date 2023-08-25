import React from 'react'

function ErrorFallback({error, resetErrorBoundary}) {
    console.log(error)
  return (
    <div>
        <p>Something went wrong. Please try later</p>
        <pre>{error.toString()}</pre>
        <button onClick={resetErrorBoundary}>try again</button>
    </div>
  )
}

export default ErrorFallback