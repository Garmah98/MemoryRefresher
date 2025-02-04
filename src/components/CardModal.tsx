import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import Modal from './Modal'
import Button from '../UI/Button'
import HoldButton from '../UI/HoldButton'

import { progressActions } from '../store/ProgressSlice'
import { useCardsDispatch, useCardsSelector } from '../store/hooks'

export default function CardModal() {
    const dispatch = useCardsDispatch()
    const selectedItem = useCardsSelector((state) => state.cards.selectedItem!)
    function hideModal() {
        dispatch(progressActions.hideModal())
    }

    useEffect(() => {
        Prism.highlightAll()
    })

    return (
        <Modal
            state="card"
            className="w-full bg-gradient-to-tr from-fourth from-25% to-third md:w-2/3"
            onClose={hideModal}
        >
            <div className="w-full p-2">
                <h2 className="break-words text-3xl">{selectedItem.name}</h2>
                <p className="text-xl text-stone-300">
                    {selectedItem.language}
                </p>
                <pre>
                    <code className={`language-${selectedItem.language}`}>
                        {selectedItem.code}
                    </code>
                </pre>
                <div className="flex justify-evenly">
                    <HoldButton className="w-1/4">Hold to Remove</HoldButton>
                    <Button onClick={hideModal} className="w-1/4">
                        Close
                    </Button>
                </div>
            </div>
        </Modal>
    )
}
