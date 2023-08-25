import React, { useState } from 'react'

const withErrorBoundaries = (Component) => 
function(){
    const [error, setError] = useState(null)
    if(error){
        return (
            <div>
                An error occured: {error.toString()}
            </div>
        )
    }
    
    try {
        return (
            <Component 
                error={error} 
                setError={setError}
            />
        )
    } catch (error) {
        setError(error)
    }
}

export default withErrorBoundaries