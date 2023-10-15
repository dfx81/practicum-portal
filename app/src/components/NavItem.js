import { NavLink } from "react-router-dom";
import React from "react";

export default function NavItem({ isMobile, path, icon, label, alt = "" }) {
    return (
        <li onClick={hideMenu}><NavLink to={path}><img className="icon invert" alt={alt} src={icon} /> {!isMobile && label}</NavLink></li>
    );
}

function hideMenu(evt) {
    document.querySelectorAll(".toggled").forEach(
        (item) => {
            item.classList.remove("toggled");
        }
    );

    document.body.classList.remove("no-scroll");
}