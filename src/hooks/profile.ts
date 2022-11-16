import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "./redux";
import {fetchChannelsData, fetchUserData} from "../store/profile/profileThunk";

export const useProfile = () => {
    const dispatch = useAppDispatch()
    const {user, channels} = useAppSelector(state => state.profileReducer)
    useEffect(() => {
        dispatch(fetchUserData())
        dispatch(fetchChannelsData())
    }, [])

    return {user, channels}
}