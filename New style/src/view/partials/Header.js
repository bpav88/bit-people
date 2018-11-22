import React from 'react';
import "./Header.css";

const Header = (props) => {
    return (
        // <header>
        //     <h1>{props.title}</h1>
        // </header>
        <nav>
            <div className="nav-wrapper">
                <a href="." className="brand-logo center">{props.title}</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="."><i className="material-icons">refresh</i></a></li>
                    {props.isGrid ?
                        <li><a href="#"><i className="material-icons" onClick={props.onClickHandler}>view_list</i></a></li>
                        :
                        <li><a href="#"><i className="material-icons" onClick={props.onClickHandler}>view_module</i></a></li>}
                </ul>
            </div>
        </nav>

    )
}

export { Header }