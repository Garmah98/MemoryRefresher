import { useRef, useState } from 'react'
import { ButtonProps } from './Button'
import { progressActions } from '../store/ProgressSlice'
import { removeCardData } from '../store/card-Actions'
import { useCardsSelector, useCardsDispatch } from '../store/hooks'

const DELAY = 2000

export default function HoldButton({
    children,
    className,
    ...props
}: ButtonProps) {
    const userId = useCardsSelector((state) => state.auth.userId)
    const itemId: number | undefined = useCardsSelector(
        (state) => state.cards.selectedItem?.id
    )
    const dispatch = useCardsDispatch()

    const [progress, setProgress] = useState(0)
    const startTime = useRef<number | null>(null)
    const holdRef = useRef<NodeJS.Timeout | null>(null)

    function removeCard() {
        dispatch(removeCardData({ userId, itemId }))
    }
    function hideModal() {
        dispatch(progressActions.hideModal())
    }
    function handleRemove() {
        removeCard()
        hideModal()
    }

    function startTimer() {
        startTime.current = Date.now()
        holdRef.current = setInterval(() => {
            setProgress(
                Math.floor(((Date.now() - startTime.current!) / DELAY) * 100)
            )
            if (startTime.current && Date.now() - startTime.current > DELAY) {
                handleRemove()
                stopTimer()
            }
        }, 10)
    }
    function stopTimer() {
        startTime.current = null
        setProgress(0)
        if (holdRef.current) {
            clearInterval(holdRef.current)
            holdRef.current = null
        }
    }

    let stylingClasses = `m-1 p-2 text-first text-lg font-semibold border border-third rounded-md shadow-md hover:scale-95 bg-gradient-to-r from-black/15 to-black/15 bg-no-repeat select-none `
    stylingClasses += className

    return (
        <button
            onMouseDown={startTimer}
            onMouseUp={stopTimer}
            onMouseLeave={stopTimer}
            onTouchStart={startTimer}
            onTouchEnd={stopTimer}
            onContextMenu={(e) => e.preventDefault()}
            {...props}
            className={stylingClasses}
            style={{ backgroundSize: `${progress}%` }}
        >
            {children}
        </button>
    )
}
