import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Sidebar({ isMobile=false }) {
    return (
        <div className={isMobile ? "sidebar-mobile" : "sidebar"}>
            <Header isMobile={isMobile} />
            <Navigation isMobile={isMobile} />
            <Footer isMobile={isMobile} />
        </div>
    );
}