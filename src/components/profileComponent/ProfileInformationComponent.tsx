import React from 'react';
import {ProfileInformationCard, Subtitle, Row} from './profileComponentStyles'
import {IUser} from "../../models/user";

interface ProfileInformationComponentProps {
    user: IUser
}

const ProfileInformationComponent = ({user}: ProfileInformationComponentProps) => {
    return (
        <ProfileInformationCard>
            <Subtitle>сведения</Subtitle>
            <Row>
                <p>логин</p>
                <p>{user.login}</p>
            </Row>
            <Row>
                <p>email</p>
                <p>{user.email}</p>
            </Row>
            <Row>
                <p>номер телефона</p>
                <p>{user.phone}</p>
            </Row>
            <Row>
                <p>день рождения</p>
                <p>{user.birthDate}</p>
            </Row>
        </ProfileInformationCard>
    );
};

export default ProfileInformationComponent;