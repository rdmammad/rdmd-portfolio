import React from "react";
import "./footer.styles.scss";

const Footer = () => (
    <footer>
        <p className="footer__text">
            &copy; {new Date().getFullYear()} Raida Mammad
        </p>
        <p className="footer__author">
            Created with
            <span className="footer__heart">♥</span>
            by Raida Mammadova
        </p>
    </footer>
);

export default Footer;