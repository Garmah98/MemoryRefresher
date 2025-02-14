import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type authState = {
    userId: string | null
    isLoggedIn: boolean
}

const initialState: authState = {
    userId: null,
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        logout(state) {
            state.isLoggedIn = false
        },
        setUser(state, action: PayloadAction<string | null>) {
            state.userId = action.payload
        },
    },
})
export const authActions = authSlice.actions
export default authSlice.reducer
