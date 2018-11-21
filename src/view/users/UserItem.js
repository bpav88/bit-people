import React from 'react';
import './userItem.css';
import PropTypes from "prop-types";

const UserItem = ({ img, name, email, dateOfBirth }) => {
    return (
        <article className="articleDiv">
            <img src={img} alt="img" />
            <div>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Date Of Birth: {dateOfBirth}</p>
            </div>
        </article>
    )
}

UserItem.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string
}
UserItem.defaultProps = {
    name: 'Name',
    email: 'example@test.com'
}
export default UserItem;