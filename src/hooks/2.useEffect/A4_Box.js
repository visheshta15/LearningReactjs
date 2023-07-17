import React, {useEffect, useRef} from 'react'

function A4_Box() {
    const ref = useRef();

    useEffect(()=>{
        const div = ref.current
        const observer = new IntersectionObserver(entries => {
            console.log(entries)
            const entry = entries[0]
            if(entry.isIntersecting){
                document.body.style.backgroundColor = 'black';
                document.body.style.color = 'white';
            } else {
                document.body.style.backgroundColor = 'white';
                document.body.style.color = 'black';
            }
        })
        observer.observe(div, {
            threshold: 1
        })
        return () => {
            observer.disconnect()
        }
    },[])

  return (
    <div ref={ref}
    style={{
        margin: 20,
        height: 100,
        width: 100,
        border: '2px blue solid',
        background: 'pink'
    }}

    />
    
   
  )
}

export default A4_Box