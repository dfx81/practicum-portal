import React from "react";
import API_URL from "../api"

export default function Footer({ isMobile }) {
    return (<footer className="footer">
        {
            isMobile ?
                <a href="." onClick={toggleMenu}>
                    <img alt="Open menu" className="icon mobile-toggler invert" src="/assets/menu.svg" />
                </a>
                :
                <>
                    <a className="logo mobile-hider" href="." onClick={hideMenu}>
                        <img alt="Close menu" className="invert" src="/assets/close.svg" />
                    </a>
                    <div className="foot-wrap">
                        <nav className="links">
                            <a href=".">Privacy</a>
                            <a href=".">Feedback</a>
                            <a href=".">About</a>
                            <a href={API_URL + "/admin"}>Admin</a>
                            <a href=".">Terms</a>
                            <a href="https://portal.uum.edu.my">UUM Portal</a>
                        </nav>
                        <span className="copyright">&copy;2023-Present, UUM Practicum Unit.</span>
                    </div>
                </>
        }
    </footer>);
}

function toggleMenu(evt) {
    evt.preventDefault();

    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("toggled");

    if (!sidebar.classList.contains("triggered")) {
        sidebar.classList.add("triggered");
    }

    document.body.classList.add("no-scroll");
}

function hideMenu(evt) {
    evt.preventDefault();

    document.querySelectorAll(".toggled").forEach(
        (item) => {
            item.classList.remove("toggled");
        }
    );

    document.body.classList.remove("no-scroll");
}