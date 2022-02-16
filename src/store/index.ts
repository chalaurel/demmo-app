import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userReducer from "./user"

import { useDispatch, useSelector } from "./hooks"

const rootReducer = combineReducers({
    userReducer
})
const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export { useDispatch, useSelector }
export default store
