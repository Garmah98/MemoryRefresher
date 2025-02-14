import Button from '../UI/Button'
import { useCardsDispatch } from '../store/hooks'
import { progressActions } from '../store/ProgressSlice'
import { useCardsSelector } from '../store/hooks'
import { signOut } from 'firebase/auth'
import { auth } from '../util/firebase'
import { authActions } from '../store/AuthSlice'

export default function Header() {
    const isLoggedIn = useCardsSelector((state) => state.auth.isLoggedIn)
    const dispatch = useCardsDispatch()

    function handleCreateCard() {
        dispatch(progressActions.createCard())
    }
    function handleAuth() {
        if (isLoggedIn) {
            signOut(auth)
            dispatch(authActions.logout())
            dispatch(authActions.setUser(null))
            dispatch(progressActions.hideModal())
        } else {
            dispatch(progressActions.showAuth())
        }
    }
    return (
        <header className="flex w-full justify-between bg-first p-3">
            <h1 className="mr-1 text-3xl text-third">MemoryRefresher</h1>
            <div>
                {isLoggedIn && (
                    <Button className="w-32" onClick={handleCreateCard}>
                        Create Card
                    </Button>
                )}
                <Button
                    textOnly
                    className="ml-4 text-white"
                    onClick={handleAuth}
                >
                    {isLoggedIn ? 'Logout' : 'Login'}
                </Button>
            </div>
        </header>
    )
}
