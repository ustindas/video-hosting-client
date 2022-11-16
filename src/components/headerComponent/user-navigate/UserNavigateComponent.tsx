import React, {useEffect} from 'react';
import AddVideoButton from "../../buttonComponent/AddVideoButton";
import NotificationButton from "../../notificationComponent/NotificationButton";
import ProfileButton from "../../profile-button/ProfileButton";
import {Link} from "react-router-dom";
import {AUTH_ROUTE} from "../../../utils/routes";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {checkUserAuth} from "../../../store/user/userActionCreators";

const UserNavigateComponent = () => {
    const {isAuthorized} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(checkUserAuth())
    }, [])

    return (
        <div>
            {isAuthorized ?
                <div className="right-part-block-header">
                    <AddVideoButton/>
                    <NotificationButton/>
                    <ProfileButton/>
                </div>
                : <div className="right-part-block-header">
                    <Link to={AUTH_ROUTE} className="auth-btn">sign in/sign up</Link>
                </div>
            }
        </div>
    );
};

export default UserNavigateComponent;