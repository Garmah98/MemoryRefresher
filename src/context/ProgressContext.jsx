import { createContext, useState } from 'react'
export const ProgressContext = createContext({
    progress: '',
    showModal: () => {},
    hideModal: () => {},
    createCard: () => {},
})

export default function ProgressContextProvider({ children }) {
    const [progress, setProgress] = useState('')

    function showModal() {
        setProgress('card')
    }
    function createCard() {
        setProgress('create')
    }
    function hideModal() {
        setProgress('')
    }
    const ctxValue = {
        progress,
        showModal,
        hideModal,
        createCard,
    }

    return (
        <ProgressContext.Provider value={ctxValue}>
            {children}
        </ProgressContext.Provider>
    )
}
