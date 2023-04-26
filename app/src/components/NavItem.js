import { NavLink } from "react-router-dom";
import React from "react";

export default function NavItem({ isMobile, path, icon, label, alt = "" }) {
    return (
        <li><NavLink to={path}><img className="icon invert" alt={alt} src={icon} /> {!isMobile && label}</NavLink></li>
    );
}