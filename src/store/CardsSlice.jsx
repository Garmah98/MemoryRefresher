import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    selectedItem: '',
}

const cardsSlice = createSlice({
    name: 'card',
    initialState: initialState,
    reducers: {
        add(state, action) {
            state.items.push({
                id: Math.random(),
                name: action.payload.name,
                language: action.payload.language,
                code: action.payload.code,
            })
        },
        select(state, action) {
          
            const selectedItem = state.items.find(
                (item) => item.id === action.payload
            )

            state.selectedItem = selectedItem
        },
        remove(state) {
            const selectedItemIndex = state.items.findIndex(
                (item) => item.id === state.selectedItem.id
            )
            state.items.splice(selectedItemIndex, 1)
        },
    },
})
export const cardsActions = cardsSlice.actions
export default cardsSlice.reducer
