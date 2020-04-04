import React from "react";
import "./header.styles.scss"
import Settings from "../settings/settings.component";

const Header = () => (
    <header id="projects">
        <h2>Raida Mammad</h2>
        <nav className="menu">
            <a href="#projects">Projects</a>
            {/*<a href="#about">About</a>*/}
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
        </nav>
        <Settings />
    </header>
);

export default Header;