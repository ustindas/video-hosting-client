export interface IInputRegistration {
    login: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

export interface IInputLogin {
    login: string,
    password: string
}
export interface IUserNav{
    id?: number
    login: string,
    firstName: string,
    lastName: string,
}
