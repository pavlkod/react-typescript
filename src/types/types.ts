export interface IUserAddress{
    street: string,
    city: string,
    zipcode: string
}

export interface IUser{
    id: number,
    name: string,
    username: string,
    email: string,
    address: IUserAddress
}

export interface ITodo{
    id: number,
    title: string,
    completed: boolean
}