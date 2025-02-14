import { configureStore } from '@reduxjs/toolkit'

import cardsReducer from './CardsSlice'
import ProgressReducer from './ProgressSlice'
import authReducer from './AuthSlice'

const store = configureStore({
    reducer: {
        cards: cardsReducer,
        progress: ProgressReducer,
        auth: authReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
