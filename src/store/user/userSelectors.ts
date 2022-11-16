import {RootState} from "../store";

export const isAuthorized = (state: RootState) => state.userReducer.isAuthorized
