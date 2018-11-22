import React from "react";
import "./UserListItems.css";
import PropTypes from "prop-types";


const UserListItem = ({ name, surname, image, email, birthDate, gender }) => {
    return (
        <ul className="collection">
            <li className={gender === "female" ? "collection-item avatar female" : "collection-item avatar"}>
                <img src={image} alt="" className="circle" />
                <span className="title">{name} {surname}</span>
                <p><i className="tiny material-icons">mail</i>Email: {email}</p>
                <p><i className="tiny material-icons">cake</i>Date-of-birth: {birthDate}</p>
            </li>
        </ul>
    )
}

UserListItem.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired
}

export { UserListItem };