import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Card = {
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
    },
})

export const cardsActions = cardsSlice.actions
export default cardsSlice.reducer
