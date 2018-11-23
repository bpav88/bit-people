import React, { Fragment } from 'react';
import "./UserCardItem.css";
import PropTypes from "prop-types";

const UserCardItem = ({ name, image, email, birthDate, gender }) => {
    return (
        <Fragment>
            <div className="col s12 m4">
                <div className={gender === "female" ? "card female" : "card"}>
                    <div className="card-image">
                        <img src={image} alt="img" />
                        <span className="card-title">{name}</span>
                    </div>
                    <div className="card-content">
                        <p><i className="tiny material-icons">mail</i>Email: {email}</p>
                        <p><i className="tiny material-icons">cake</i>Date-of-birth: {birthDate}</p>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

UserCardItem.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired
}


export { UserCardItem };