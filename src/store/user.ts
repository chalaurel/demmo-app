import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { PURGE } from "redux-persist"
import { IUser } from "../types/user"

const initialState = {
    currentUser: {},
    users: {}
}

const userReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetchUserState: (state, { payload }: PayloadAction<IUser>) => {
            state.currentUser = payload
        },
        resetCurrentUser: (state, { payload }: PayloadAction<IUser>) => {
            console.log("reducer user")
            state.currentUser = payload
        }
    },
})

export const { fetchUserState, resetCurrentUser } = userReducer.actions

export default userReducer.reducer
