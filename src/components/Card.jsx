import { progressActions } from '../store/ProgressSlice'
import { cardsActions } from '../store/CardsSlice'
import { useDispatch } from 'react-redux'

export default function Card({ title, language, id }) {
    const dispatch = useDispatch()

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
