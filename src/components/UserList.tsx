import React, { FC } from 'react'
import { IUser } from '../types/types'
import UserItem from './UserItem'

interface UserListProps{
    users: IUser[]
}

const UserList:FC<UserListProps> = (props) => {
    return (
        <div style={{padding:15, border:'1px solid #000'}}>
            {props.users.map(user => <UserItem key={user.id} user={user}/>)}
        </div>
    )
}

export default UserList
