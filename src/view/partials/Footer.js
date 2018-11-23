import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        // <footer>
        //     <p className="container">© 2018 Copyright BIT</p>
        // </footer>
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container center">
                    © {new Date().getFullYear()} Copyright BIT
                </div>
            </div>
        </footer>
    )
}

export { Footer }