import {IInputLogin, IInputRegistration} from "../store/types";
import {REACT_APP_API} from "../utils/consts";

export const loginUserRequest = async (inputsData: IInputLogin) => {
    return await fetch(`${REACT_APP_API}/auth/login`, {
        method: "POST",
        body: JSON.stringify(inputsData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
}
export const registrationUserRequest = async (inputsData: IInputRegistration) => {
    return await fetch(`${REACT_APP_API}/users`, {
        method: "POST",
        body: JSON.stringify(inputsData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

