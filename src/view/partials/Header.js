import React from 'react';
import "./Header.css";

const Header = (props) => {
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <a href="." className="brand-logo center">{props.title}</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a><i className="material-icons" onClick={props.onRefreshClick}>refresh</i></a></li>
                        {props.isGrid ?
                            <li><a><i className="material-icons" onClick={props.onClickHandler}>view_list</i></a></li>
                            :
                            <li><a><i className="material-icons" onClick={props.onClickHandler}>view_module</i></a></li>}
                    </ul>
                </div>
            </nav>
        </header>


    )
}

export { Header }