import React from 'react';
import {Link} from "react-router-dom";
import {PROFILE_ROUTE} from "../../utils/routes";
import dropdownImg from '../../images/dropdown.png'
import "./profileButton.css"
import {useAppSelector} from "../../hooks/redux";

const ProfileButton = () => {
    const {user} = useAppSelector(state => state.userReducer)

    return (
        <Link to={PROFILE_ROUTE} className="header-profile">
            <div className="header-profile-img"></div>
            <p className="header-profile-name">{user.firstName} {user.lastName}</p>
            <img className="header-profile-dropdown-img" src={dropdownImg} alt="dropdown image"/>
        </Link>
    );
};

export default ProfileButton;