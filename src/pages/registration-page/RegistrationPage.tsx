import React, {useState} from 'react';
import {
    Input,
    FormInputGroup,
    Label,
    Button,
    EyeButton,
    TitleForm,
    SubtitleForm,
    InputsRow,
    FormInputArea,
    FootForm,
    Form
} from '../../components/styles/AuthStyles'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {Link, Navigate} from "react-router-dom";
import {AUTH_ROUTE, HOME_ROUTE} from "../../utils/routes";
import {registrationUser} from "../../store/user/userThunk";


type TInputRegistration = {
    login: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
}

const initialInputsData: TInputRegistration = {
    login: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const RegistrationPage = () => {

    const dispatch = useAppDispatch()
    const [inputsData, setInputsData] = useState(initialInputsData)
    const [passwordType, setPasswordType] = useState("password")
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        if (inputsData.password !== inputsData.confirmPassword) {
            console.log("пороли не совпадают")
            return
        }
        dispatch(registrationUser(inputsData))
    }

    const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>, inputType: string) => {
        setInputsData({...inputsData, [inputType]: event.target.value})
    }

    const {isAuthorized} = useAppSelector(state => state.userReducer)

    if (isAuthorized)
        return <Navigate to={HOME_ROUTE}/>

    function changePasswordVisible() {
        if (passwordType === "text") {
            setPasswordType("password")
        } else setPasswordType("text")
    }

    return (
        <>
            <Form width="480px" onSubmit={submitHandler}>
                <TitleForm>Регистрация</TitleForm>
                <SubtitleForm>Создайте аккаунт VitaxaTube</SubtitleForm>
                <FormInputArea>
                    <Label>Логин</Label>
                    <FormInputGroup>
                        <Input
                            value={inputsData.login}
                            onChange={e => changeInputValue(e, "login")}
                        />
                    </FormInputGroup>
                    <InputsRow>
                        <Label>Имя
                            <FormInputGroup>
                                <Input
                                    value={inputsData.firstName}
                                    onChange={e => changeInputValue(e, "firstName")}
                                />
                            </FormInputGroup>
                        </Label>
                        <Label>Фамилия
                            <FormInputGroup>
                                <Input
                                    value={inputsData.lastName}
                                    onChange={e => changeInputValue(e, "lastName")}
                                />
                            </FormInputGroup>
                        </Label>
                    </InputsRow>
                    <Label>Email</Label>
                    <FormInputGroup>
                        <Input
                            value={inputsData.email}
                            onChange={e => changeInputValue(e, "email")}
                        />
                    </FormInputGroup>
                    <InputsRow>
                        <Label>Пароль
                            <FormInputGroup>
                                <Input
                                    type={passwordType}
                                    value={inputsData.password}
                                    onChange={e => changeInputValue(e, "password")}
                                />
                                <EyeButton type="button" onClick={e => changePasswordVisible()}></EyeButton>
                            </FormInputGroup>
                        </Label>
                        <Label>Подтвердить пароль
                            <FormInputGroup>
                                <Input
                                    type={passwordType}
                                    value={inputsData.confirmPassword}
                                    onChange={e => changeInputValue(e, "confirmPassword")}
                                />
                                <EyeButton type="button" onClick={e => changePasswordVisible()}></EyeButton>
                            </FormInputGroup>
                        </Label>
                    </InputsRow>
                </FormInputArea>
                <FootForm>
                    <div>Есть аккаун?
                        <Link className="nav-link" to={AUTH_ROUTE}>Войти</Link>
                    </div>
                    <Button type="submit" className="common-button">sign up</Button>

                </FootForm>
            </Form>
        </>
    )
};

export default RegistrationPage;