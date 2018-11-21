import React from 'react';
import UserItem from './UserItem';
import './userList.css';


const UserList = (props) => {
    const userList = props.users.map((user, id) => {
        return < UserItem key={id} img={user.url} name={user.name} email={user.getEmailData()} dateOfBirth={user.getDateOfBirthData()} />
    })
    return (
        <main>
            {userList}
        </main>
    )
}

export default UserList;