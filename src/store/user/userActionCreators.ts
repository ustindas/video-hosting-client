import {getAccessCookie} from "../../services/cookieService";
import {userAuthorized} from "./userReducer";
import {AppDispatch} from "../store";

export const checkUserAuth = () => (dispatch: AppDispatch) => {
    if (getAccessCookie()) {
        dispatch(userAuthorized())
    }
}



