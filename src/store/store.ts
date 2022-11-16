import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/userReducer";
import profileReducer from "./profile/profileReducer";

const rootReducer = combineReducers({
    userReducer,
    profileReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export * as userSelectors from './user/userSelectors'