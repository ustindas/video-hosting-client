import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUserState} from "../state";
import {loginUser, registrationUser} from "./userThunk";
import {IUserNav} from "../types";

const initialState: IUserState = {
    isAuthorized: false,
    user: {
        login: '',
        firstName: '',
        lastName: '',
    },
    loading: false,
    error: ''
}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userAuthorized(state) {
            state.isAuthorized = true
        },
        userIsNotAuthorized(state) {
            state.isAuthorized = false
        }
    },
    extraReducers: {
        [loginUser.pending.type]: (state) => {
            state.loading = true
        },
        [loginUser.fulfilled.type]: (state, action: PayloadAction<IUserNav>) => {    //TODO типизировать action
            state.isAuthorized = true
            state.loading = false
            state.error = ''
            state.user = action.payload
            console.log(action.payload)
        },
        [loginUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
        [registrationUser.pending.type]: (state) => {
            state.loading = true
        },
        [registrationUser.fulfilled.type]: (state, action: PayloadAction<IUserNav>) => {
            state.isAuthorized = true
            state.loading = false
            state.error = ''
            state.user = action.payload
        },
        [registrationUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
    },
})

export default userReducer.reducer
export const {userAuthorized, userIsNotAuthorized} = userReducer.actions