export default function NavItem({ isMobile, icon, label, alt = "", isActive = false }) {
    return (
        <li className={isActive ? "active" : undefined}><a href="."><img className="icon invert" alt={alt} src={icon} /> {!isMobile && label}</a></li>
    );
}