import React from 'react'

function UpdateComponent(OriginalComponent, color) {
    function NewComponent(){
        let obj
        if(color === 'green'){
            obj = {
                text : 'Success',
                symbol : '🍏',
                color: color
            }
        }else if(color === 'red'){
            obj = {
                text : 'Error',
                symbol : '🟥',
                color: color
            }
        }
        return <OriginalComponent obj={obj}/>
    }


  return NewComponent
}

export default UpdateComponent