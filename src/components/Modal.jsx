import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useSelector } from 'react-redux'

export default function Modal({ children, state, onClose, className }) {

    const progress = useSelector((state) => state.progress.progress)
    
    const dialog = useRef()
    useEffect(() => {
        const modal = dialog.current
        if (state === progress) {
            modal.showModal()
        }
        return () => modal.close()
    }, [progress])

    let stylingClasses =
        'p-2 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop:bg-black backdrop:opacity-65 '
    stylingClasses += className

    return createPortal(
        <dialog onClose={onClose} className={stylingClasses} ref={dialog}>
            {children}
        </dialog>,
        document.getElementById('modal')
    )
}
