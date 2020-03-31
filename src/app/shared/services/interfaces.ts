export interface User{
    email: string
    password: string
}

export interface RegisterUser{
    username: string
    email: string
    password: string
}

export interface Transaction{
    id: number
    date: Date
    username: string
    amount: number
    balance: number
}

export interface UserInfo{
    id: number
    date: Date
    name: string
    email: string
    balance: number
}

export interface PostTransaction{
    username: string
    amount: number
}
