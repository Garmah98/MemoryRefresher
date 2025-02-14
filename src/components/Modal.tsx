import { useRef, useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useCardsSelector } from '../store/hooks'

type ModalProps = {
    children: ReactNode
    state: string
    onClose: () => void
    className?: string
}

export default function Modal({
    children,
    state,
    onClose,
    className,
}: ModalProps) {
    const progress = useCardsSelector((state) => state.progress.progress)

    const dialog = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        const modal = dialog.current
        if (state === progress) {
            modal!.showModal()
        }
        return () => modal!.close()
    }, [progress])

    let stylingClasses =
        'p-2 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop:bg-black backdrop:opacity-65 '
    stylingClasses += className

    return createPortal(
        <dialog onClose={onClose} className={stylingClasses} ref={dialog}>
            {children}
        </dialog>,
        document.getElementById('modal') as Element | DocumentFragment
    )
}
