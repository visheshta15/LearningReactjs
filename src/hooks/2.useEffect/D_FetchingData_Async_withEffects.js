import React from 'react'
import D2_Fetch from './D2_Fetch'
import D3_AsyncAwait from './D3_AsyncAwait'

function D_FetchingData_Async_withEffects() {
  return (
    <div>
        <h4>D. Fetching data with Effects</h4>
        <p>You can use an Effect to fetch data for your component. Note that if you use a framework, using your framework’s data fetching mechanism will be a lot more efficient than writing Effects manually.</p>
        <hr />
        <D2_Fetch />
        <D3_AsyncAwait />
    </div>
  )
}

export default D_FetchingData_Async_withEffects