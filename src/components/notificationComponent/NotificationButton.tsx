import React from 'react';
import "./notificationButton.css"
import notificationImage from "../../images/notification.png"

const NotificationButton = () => {
    return (
        <div className="notification-area-block">
            <img className="notification-image" src={notificationImage} alt="notification"/>
        </div>
    );
};

export default NotificationButton;