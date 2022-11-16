import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAccessCookie} from "../../services/cookieService";
import {getUser} from "../../http/userRequests";
import {getChannelUser} from "../../http/channelRequest";

export const fetchUserData = createAsyncThunk(
    'profile/user',
    async (_, thunkApi) => {
        try {
            const token = getAccessCookie()
            if (!getAccessCookie())
                return thunkApi.rejectWithValue(`Unauthorized`)
            const response = await getUser(token || '')
            const jsonData = await response.json()
            return jsonData
        } catch (e) {
            return thunkApi.rejectWithValue(`Can't get data from server`)
        }
    }
)

export const fetchChannelsData = createAsyncThunk(
    'profile/channels',
    async (_, thunkApi) => {
        try {
            const token = getAccessCookie()
            if (!getAccessCookie())
                return thunkApi.rejectWithValue(`Unauthorized`)
            const response = await getChannelUser(token || '')
            const jsonData = await response.json()
            return jsonData
        } catch (e) {
            return thunkApi.rejectWithValue(`Can't get data from server`)
        }
    }
)


