import React from 'react';
import "./UserList.css";
import { UserCardItem } from "./UserCardItem";
import { UserListItem } from "./UserListItems";

const UserList = ({ listOfUsers, isGrid }) => {

    const userCardItems = listOfUsers.map((user, index) => {

        const { firstName, pictures, birthDate, gender } = user;

        return <UserCardItem
            key={index}
            name={firstName}
            email={user.getHiddenEmail()}
            image={pictures.large}
            birthDate={birthDate}
            gender={gender}
        />
    })

    const userListItems = listOfUsers.map((user, index) => {

        const { firstName, lastName, pictures, birthDate, gender } = user;

        return <UserListItem
            key={index}
            name={firstName}
            surname={lastName}
            email={user.getHiddenEmail()}
            image={pictures.thumbnail}
            birthDate={birthDate}
            gender={gender}

        />
    })

    return (
        <main className="row">
            {isGrid ? userCardItems : userListItems}
        </main>
    )
}

export { UserList }