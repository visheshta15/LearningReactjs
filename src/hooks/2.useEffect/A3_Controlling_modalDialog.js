import React , { useEffect, useState } from 'react'
import A3_ModalDialog from './A3_ModalDialog';


function A3_Controlling_modalDialog() {
    const [showModal, setShowModal] = useState(false)
    
  return (
    <div>
        <h4>3. Controlling a modal dialog </h4>
        <button onClick={()=> setShowModal(true) }>Open Modal</button>
        <A3_ModalDialog isOpen={showModal} >
            Hello there
            <br />
            <button onClick={()=>setShowModal(false)}>
                 Close
            </button>
        </A3_ModalDialog>
        <br />
        <br />
        <hr />
    </div>
  )
}

export default A3_Controlling_modalDialog