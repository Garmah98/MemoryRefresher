import { progressActions } from '../store/ProgressSlice'
import { cardsActions } from '../store/CardsSlice'
import { useCardsDispatch } from '../store/hooks'

type CardProps = {
    title: string
    language: string
    id: number,
}

export default function Card({ title, language, id }: CardProps) {
    const dispatch = useCardsDispatch()

    function showModal() {
        dispatch(progressActions.showModal())
    }
    function handleSelectItem() {
        dispatch(cardsActions.select(id))
    }

    function handleButton() {
        showModal()
        handleSelectItem()
    }
    const selectedLanguage = language.toUpperCase()
    return (
        <div className="h-32 w-full rounded-lg bg-gradient-to-tr from-fourth to-third shadow-2xl md:h-64 lg:h-44">
            <button
                onClick={() => handleButton()}
                className="relative h-full w-full break-all rounded-lg p-2"
            >
                <h2 className="text-2xl">{title}</h2>
                <p className="absolute bottom-2 right-2 text-xl text-stone-800">
                    {selectedLanguage}
                </p>
            </button>
        </div>
    )
}
