import Button from '../UI/Button'
import { useCardsDispatch } from '../store/hooks'
import { progressActions } from '../store/ProgressSlice'

export default function Header() {
    const dispatch = useCardsDispatch()

    function handleCreateCard() {
        dispatch(progressActions.createCard())
    }
    return (
        <header className="flex w-full justify-between bg-first p-3">
            <h1 className="mr-1 text-3xl text-third">MemoryRefresher</h1>
            <Button className="w-32" onClick={handleCreateCard}>
                Create Card
            </Button>
        </header>
    )
}
