import NavItem from "./NavItem";

export default function Navigation({ isMobile }) {
    return (
        <nav className="nav">
            <ul>
                <NavItem icon="assets/campaign.svg" isMobile={isMobile} label="Announcements" />
                <NavItem icon="assets/work.svg" isMobile={isMobile} label="Companies" />
                <NavItem icon="assets/help.svg" isMobile={isMobile} label="Info & Guides" />
                <NavItem icon="assets/resources.svg" isMobile={isMobile} label="Resources" />
                <NavItem icon="assets/phone.svg" isMobile={isMobile} label="Contact Info" isActive={true}/>
            </ul>
        </nav>
    );
}