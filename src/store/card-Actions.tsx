import { createAsyncThunk } from '@reduxjs/toolkit'
import { database, ref, get, push, remove, query } from '../util/firebase'
import { Card } from './CardsSlice'
import { equalTo, orderByChild } from 'firebase/database'

export type CardData = {
    userId: string
    data: Card
}

export const sendCardData = createAsyncThunk(
    'card/sendData',
    async ({ userId, data }: CardData, { rejectWithValue }) => {
        try {
            const cardRef = ref(database, `users/${userId}/`)
            await push(cardRef, data)
            return {
                userId: userId,
                data: data,
            }
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

export const removeCardData = createAsyncThunk(
    'card/removeData',
    async ({
        userId, // firebase user.uid
        itemId, // id of the item
    }: {
        userId: string | null
        itemId: number | undefined
    }) => {
        try {
            const userRef = ref(database, `users/${userId}`)
            const q = query(userRef, orderByChild('id'), equalTo(itemId!))
            const snapshot = await get(q)

            if (snapshot.exists()) {
                const delPromises: Promise<void>[] = []
                snapshot.forEach((child) => {
                    console.log('works')
                    delPromises.push(remove(child.ref))
                })
            } 
            return itemId
        } catch (error: any) {
            return error.message
        }
    }
)
export const fetchCardData = createAsyncThunk(
    'card/fetchCardData',
    async (userId: string, { rejectWithValue }) => {
        try {
            const dataRef = ref(database, `users/${userId}/`)
            const dataSnapshot = await get(dataRef)
            if (dataSnapshot.exists()) {
                const dataObject = dataSnapshot.val()
                const dataArray = Object.keys(dataObject).map((key) => ({
                    id: key,
                    ...dataObject[key],
                }))
                return dataArray
            } else {
                return rejectWithValue('No data found.')
            }
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)
