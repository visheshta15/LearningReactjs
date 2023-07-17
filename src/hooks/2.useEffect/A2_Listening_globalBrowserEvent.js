import React, { useEffect, useState } from 'react'

function A2_Listening_globalBrowserEvent() {
    const [position, setPosition] = useState({x:0, y:0})
    const [box, setBox] = useState()

    useEffect(()=>{
        setBox(document.getElementsByClassName('redBox'))
    },[])
    
    useEffect(()=>{
        const handleMove = (e) =>{
            if(box && box[0]){
            //    console.log(box[0].offsetLeft, box[0].offsetLeft + box[0].offsetWidth, box[0].offsetTop, box[0].offsetTop + box[0].offsetHeight) 
               if(e.clientX>box[0].offsetLeft && e.clientX < (box[0].offsetLeft + box[0].offsetWidth - 40) && e.clientY > (box[0].offsetTop) && (e.clientY < box[0].offsetTop + box[0].offsetHeight - 40)  ){
                setPosition({x: e.clientX, y: e.clientY})
               }
            }
        }
        window.addEventListener('pointermove', handleMove)
        return () => {
            window.removeEventListener('pointermove', handleMove)
        }
    }, [box])


  return (
    <div>
        <h4>2. Listening to a global browser event</h4>
        <p>In this example, the external system is the browser DOM itself. Normally, you’d specify event listeners with JSX, but you can’t listen to the global window object this way. An Effect lets you connect to the window object and listen to its events. Listening to the pointermove event lets you track the cursor (or finger) position and update the red dot to move with it.</p>
        <div  className='redBox' style={{
            position: 'relative',
            height: '200px',
            width: '200px',
            border: '2px solid red'
        }}>

        </div>
        <div 
            style={{
                position: 'absolute',
                background: 'teal',
                borderRadius: '50%',
                opacity: 0.6,
                left: -20,
                top: -20,
                width: 40,
                height: 40,
                pointerEvents: 'none',
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
        />



        <hr />
    </div>
  )
}

export default A2_Listening_globalBrowserEvent