import React from "react";
import NavItem from "./NavItem";

export default function Navigation({ isMobile }) {
    return (
        <nav className="nav">
            <ul>
                <NavItem icon="assets/campaign.svg" path="/" isMobile={isMobile} label="Announcements" />
                <NavItem icon="assets/work.svg" path="companies" isMobile={isMobile} label="Companies" />
                <NavItem icon="assets/help.svg" path="info" isMobile={isMobile} label="Info & Guides" />
                <NavItem icon="assets/resources.svg" path="resources" isMobile={isMobile} label="Resources" />
                <NavItem icon="assets/phone.svg" path="contacts" isMobile={isMobile} label="Contact Info" />
            </ul>
        </nav>
    );
}