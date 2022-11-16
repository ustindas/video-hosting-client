import {REACT_APP_API} from "../utils/consts";

export const getChannelUser = async (token: string) => {
    return await fetch(`${REACT_APP_API}/channels`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    })
}