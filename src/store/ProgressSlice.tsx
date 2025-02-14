import { createSlice } from '@reduxjs/toolkit'

type progressState = {
    progress: string
}

const initialState: progressState = {
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
        showAuth(state) {
            state.progress = 'auth'
        },
        hideModal(state) {
            state.progress = ''
        },
    },
})
export const progressActions = progressSlice.actions
export default progressSlice.reducer
