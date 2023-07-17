import React , {useRef, useEffect }from 'react'

function A3_ModalDialog({isOpen, children}) {
    const ref = useRef();
    useEffect(()=>{
        if(!isOpen){
            return
        }

        const dialog = ref.current
        console.log(dialog)
        dialog.showModal()
        return () => {
            dialog.close()
        }
    }, [isOpen])

  return (
    <dialog ref={ref}>
        {children}
    </dialog>
  )
}

export default A3_ModalDialog