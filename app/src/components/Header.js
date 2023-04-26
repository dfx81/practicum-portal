import React from "react";

export default function Header({ isMobile }) {
    return (
        <header className="header">
            {
                isMobile ?
                    <a href=".">
                        <img className="icon" alt="Site Logo" src="assets/cuic.png" />
                    </a>
                    :
                    <div className="head-wrap">
                        <a className="logo" href=".">
                            <img src="assets/cuic.png" alt="Site Logo" />
                        </a>
                        <h1 className="title">CUIC PORTAL</h1>
                    </div>
            }
        </header>
    );
}