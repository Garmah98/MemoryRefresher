import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchCardData, removeCardData, sendCardData } from './card-Actions'
import { CardData } from './card-Actions'

export type Card = {
    id: number
    name: string
    language: string
    code: string
}

type CardsState = {
    items: Card[]
    selectedItem: Card | undefined
}

const initialState: CardsState = {
    items: [],
    selectedItem: undefined,
}

const cardsSlice = createSlice({
    name: 'card',
    initialState: initialState,
    reducers: {
        add(state, action: PayloadAction<Card>) {
            state.items.push({
                id: action.payload.id,
                name: action.payload.name,
                language: action.payload.language,
                code: action.payload.code,
            })
        },
        select(state, action: PayloadAction<number>) {
            const selectedItem = state.items.find(
                (item) => item.id === action.payload
            )

            state.selectedItem = selectedItem
        },
        remove(state) {
            const selectedItemIndex = state.items.findIndex(
                (item) => item.id === state.selectedItem!.id
            )
            state.items.splice(selectedItemIndex, 1)
        },
        clearCards(state) {
            state.items = []
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchCardData.fulfilled,
            (state, action: PayloadAction<Card[]>) => {
                state.items = action.payload
            }
        )
        builder.addCase(
            sendCardData.fulfilled,
            (state, action: PayloadAction<CardData>) => {
                state.items = [...state.items, action.payload.data]
            }
        )
        builder.addCase(
            removeCardData.fulfilled,
            (state, action: PayloadAction<number>) => {
                state.items = state.items.filter(
                    (item) => item.id !== action.payload
                )
            }
        )
    },
})

export const cardsActions = cardsSlice.actions
export default cardsSlice.reducer
