import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchChannelsData, fetchUserData} from "./profileThunk";
import {IProfileState} from "../state";
import {IUser} from "../../models/user";
import {IChannel} from "../../models/channel";

const initialUser = {
    id: "",
    login: "",
    firstName: "",
    lastName: "",
    phone: "",
    birthDate: "",
    email: "",
}

const initialState: IProfileState = {
    user: initialUser,
    channels: []
}

export const profileReducer = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUserData.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        },
        [fetchChannelsData.fulfilled.type]: (state, action: PayloadAction<IChannel[]>) => {
            state.channels = action.payload
        },
    }
})


export default profileReducer.reducer