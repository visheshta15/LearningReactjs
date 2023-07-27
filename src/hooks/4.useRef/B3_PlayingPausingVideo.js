import React, { useRef, useState } from 'react'

function B3_PlayingPausingVideo() {
  // This example uses a ref to call play() and pause() on a <video> DOM node.
  const [isPlaying, setIsPlaying] = useState(false)
  const ref = useRef(null)
  const handleClick = () =>{
    // console.log(ref.current)
    const nextIsPlaying = !isPlaying
    setIsPlaying(nextIsPlaying)

    if(nextIsPlaying){
      ref.current.play()
    }else{
      ref.current.pause()
    }
  }
  return (
    <div>
        <h5>3. Playing and pausing a video </h5>
        <button onClick={handleClick}>{isPlaying ? 'Pause': 'Start'}</button>
        <br />
        <video
          // controls
          loop
          width={'250'}
          ref={ref}
          onPlay={()=> setIsPlaying(true)}
          onPause={()=> setIsPlaying(false)}
        >
          <source 
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"
          />
        </video>
        <hr />
    </div>
  )
}

export default B3_PlayingPausingVideo