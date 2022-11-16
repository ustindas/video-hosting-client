import {createAsyncThunk} from "@reduxjs/toolkit";
import {REACT_APP_API} from "../../utils/consts";
import {setCookie} from "../../services/cookieService";
import {IInputLogin, IInputRegistration} from "../types";
import {userData} from "../../mock/user";
import {loginUserRequest, registrationUserRequest} from "../../http/authRequests";

export const loginUser = createAsyncThunk(
    'user/login',
    async (inputsData: IInputLogin, thunkApi) => {
        try {
            const response = await loginUserRequest(inputsData)
            const {token} = await response.json()
            setCookie('accessToken', token)
            return userData
        } catch (e) {
            return thunkApi.rejectWithValue(`Can't get data from server`)
        }
    }
)

export const registrationUser = createAsyncThunk(
    'user/registration',
    async (inputsData: IInputRegistration, thunkApi) => {
        try {
            const response = await registrationUserRequest(inputsData)
            const {token} = await response.json()
            setCookie('accessToken', token)
            return userData
        } catch (e) {
            return thunkApi.rejectWithValue(`Can't get data from server`)
        }
    }
)







