import {IUserNav} from "./types";
import {IUser} from "../models/user";
import {IChannel} from "../models/channel";

export interface IUserState {
    isAuthorized: boolean,
    user: IUserNav,
    loading: boolean,
    error: string
}

export interface IProfileState{
    user: IUser,
    channels: IChannel[] ,
}