export const setCookie = (key: string, data: any) => {
    window.document.cookie = `${key}=${data};`;
}

export const getAccessCookie = () => {
    const token =  window.document.cookie.split(';')
        .find( item =>
            item.startsWith('accessToken=')
        )
    return token ? token.slice(12) : token

}

export const removeCookie = (key: string) => {
    
}
