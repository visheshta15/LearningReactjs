import React, { useRef } from 'react'
import {data} from './images'

function B2_ScrollingImageIntoView() {
    // In this example, clicking the button will scroll an image into view. It uses a ref to the list DOM node, and then calls DOM querySelectorAll API to find the image we want to scroll to.
    const ref = useRef(null)
    const scrollToIndex = (index) =>{
        const listNode = ref.current
        const imgNode = listNode.querySelectorAll('li>img')[index]
        console.log(index, listNode, imgNode)
        imgNode.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })

    }
  return (
    <div>
        <h5>2. Scrolling an image into view</h5>
        <nav>
            {data.map((ele, index)=> 
                <button key={index} onClick={()=>scrollToIndex(index)}>{ele.brand}</button>
            )}
        </nav>
        <div className='scroll'>
            <ul ref={ref}>
            {data.map((ele, index)=> 
                <li key={index}>
                    <img src={ele.image} alt={ele.brand} />
                </li>
            )}
            </ul>
        </div>
        <hr />
    </div>
  )
}

export default B2_ScrollingImageIntoView
