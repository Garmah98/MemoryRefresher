import Header from './components/Header'
import MainBoard from './components/MainBoard'
import CardModal from './components/CardModal'
import CreateCard from './components/CreateCard'
import Auth from './components/Auth'

import { useEffect } from 'react'
import { auth } from './util/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { fetchCardData } from './store/card-Actions'
import { authActions } from './store/AuthSlice'
import { useCardsDispatch } from './store/hooks'
import { cardsActions } from './store/CardsSlice'

function App() {
    const dispatch = useCardsDispatch()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(authActions.login())
                dispatch(authActions.setUser(user.uid))
                dispatch(fetchCardData(user.uid))
            } else {
                dispatch(cardsActions.clearCards())
                dispatch(authActions.logout())
            }
        })
        return () => unsubscribe()
    }, [dispatch])


    return (
        <>
            <Auth />
            <CreateCard />
            <CardModal />
            <Header />
            <MainBoard />
        </>
    )
}

export default App
