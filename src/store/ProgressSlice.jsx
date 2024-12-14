import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    progress: '',
}

const progressSlice = createSlice({
    name: 'progress',
    initialState: initialState,
    reducers: {
        showModal(state) {
            state.progress = 'card'
        },
        createCard(state) {
            state.progress = 'create'
        },
        hideModal(state) {
            state.progress = ''
        },
    },
})
export const progressActions = progressSlice.actions
export default progressSlice.reducer
