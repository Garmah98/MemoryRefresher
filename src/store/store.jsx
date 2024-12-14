import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './CardsSlice'
import ProgressReducer from './ProgressSlice'

const store = configureStore({
    reducer: {
        cards: cardsReducer,
        progress: ProgressReducer,
    },
})

export default store
