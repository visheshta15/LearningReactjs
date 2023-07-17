import React, { useEffect } from 'react'
import A4_Box from './A4_Box'

function A4_TrackingElementVisibility() {
    function LongSection(){
        const item = []
        for (let i=0; i<50; i++){
            item.push(<li key={i}>Item #{i} Keep scrolling </li>)
        }
        return <ul>{item}</ul>
    }

    

  return (
    <div> 
        <h4>4. Tracking element visibility</h4>
            <LongSection />
            <A4_Box />
            <LongSection />
            <A4_Box />
            <LongSection />
        
        <hr />
    </div>
  )
}

export default A4_TrackingElementVisibility