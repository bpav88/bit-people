import React from 'react';

const Search = (props) => {

    return (
        <nav>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" onChange={props.onSearchHandler} required />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )

}

export { Search }