import {REACT_APP_API} from "../utils/consts";

export const getUser = async (token: string) => {
    return await fetch(`${REACT_APP_API}/users`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    })
}