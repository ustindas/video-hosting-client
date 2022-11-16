import React from 'react';
import {ProfilePageContainer, ProfileInformation, Name, Button, Avatar} from './profilePageStyles'
import ProfileInformationComponent from "../../components/profileComponent/ProfileInformationComponent";
import {useProfile} from "../../hooks/profile";
import ChannelsComponent from "../../components/ChannelsComponent/ChannelsComponent";

const ProfilePage = () => {
    const {user, channels} = useProfile()
    return (
        <ProfilePageContainer>
            <ProfileInformation>
                <Avatar/>
                <Name>{user.firstName} {user.lastName}</Name>
                <Button>Управление аккаунтом</Button>
                <ProfileInformationComponent user={user}/>
            </ProfileInformation>
            <ChannelsComponent channels={channels}/>
        </ProfilePageContainer>
    );
};

export default ProfilePage;