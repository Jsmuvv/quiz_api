

export type UserFormDataType = {
    email:string,
    firstName: string,
    lastName:string,
    username:string,
    password: string,
    confirmPassword:string
}

export type UserType = {
    firstName:string,
    lastName:string,
    username:string,
    id:number,
    email:string
}


export type CategoryType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light'


export type APIResponse<T> = {
    error?: string,
    data?: T
}