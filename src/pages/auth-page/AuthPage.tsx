import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {Link, Navigate} from "react-router-dom";
import {HOME_ROUTE, REGISTRATION_ROUTE} from "../../utils/routes";
import {
    Input,
    SubtitleForm,
    TitleForm,
    FormInputArea,
    Button,
    FormInputGroup,
    Label,
    FootForm,
    EyeButton,
    Form
} from "../../components/styles/AuthStyles";
import {loginUser} from "../../store/user/userThunk";


const AuthPage = () => {
    const dispatch = useAppDispatch()
    const [login, setLogin] = useState('string')
    const [password, setPassword] = useState('string')
    const [passwordType, setPasswordType] = useState("password")
    const {isAuthorized} = useAppSelector(state => state.userReducer)

    if (isAuthorized)
        return <Navigate to={HOME_ROUTE} />

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const inputsData = {
            login,
            password
        }
        dispatch(loginUser(inputsData))
    }

    const changeLoginHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value)
    }
    const changePasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    function changePasswordVisible() {
        if (passwordType === "text") {
            setPasswordType("password")
        } else setPasswordType("text")
    }

    return (
        <Form width="360px" className="login-form" onSubmit={submitHandler}>
            <TitleForm>Войти</TitleForm>
            <SubtitleForm>Войдите в аккаунт VitaxaTube
            </SubtitleForm>
            <FormInputArea >
                <Label htmlFor="login-id" className="form-label">
                    Логин</Label>
                <FormInputGroup className="form-control">

                    <Input type="text"
                           className="form-input"
                           placeholder="Enter login..."
                           value={login}
                           onChange={changeLoginHandler}
                    />

                </FormInputGroup>
                <Label htmlFor="password-id" className="form-label"> Пароль</Label>
                <FormInputGroup className="form-control">
                    <Input type={passwordType}
                           className="form-input"
                           placeholder="Enter password..."
                           value={password}
                           onChange={changePasswordHandler}
                    />
                    <EyeButton type="button" onClick={e => changePasswordVisible()}>

                    </EyeButton>
                </FormInputGroup>
            </FormInputArea>
            <FootForm>
                <Link className="nav-link" to={REGISTRATION_ROUTE}>
                    Зарегистрироваться
                </Link>
                <Button primary type="submit" className="common-button">
                    sign in
                </Button>
                <Button type="button" light background={'white'} className="common-button">Google</Button>
            </FootForm>
        </Form>

    );
};

export default AuthPage;