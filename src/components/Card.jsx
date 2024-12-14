import { useContext } from 'react'
import { ProgressContext } from '../context/ProgressContext'
import { CardContext } from '../context/CardContext'

export default function Card({ title, language, id }) {
    const { showModal } = useContext(ProgressContext)
    const { handleSelectItem } = useContext(CardContext)
    function handleButton() {
        showModal()
        handleSelectItem(id)
    }
    return (
        <div className="h-32 w-full rounded-lg bg-gradient-to-tr from-fourth to-third shadow-2xl md:h-64 lg:h-44">
            <button
                onClick={() => handleButton()}
                className="relative h-full w-full break-all rounded-lg p-2"
            >
                <h2 className="text-2xl">{title}</h2>
                <p className="absolute bottom-2 right-2 text-xl text-stone-800">
                    {language}
                </p>
            </button>
        </div>
    )
}
