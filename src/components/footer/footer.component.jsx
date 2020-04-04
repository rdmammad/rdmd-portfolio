import React from "react";
import "./footer.styles.scss";
import CustomIcon from "../custom-icon/custom-icon.component";
import {SOCIALS_DATA} from "./socials.data";

class Footer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            socials: SOCIALS_DATA,
        };
    }

    render() {
        const {socials} = this.state;

        return (
            <footer>
                <div className="rdmammad__sicials">
                    {
                        socials.map(({id, title, image_path, url}) =>
                            <CustomIcon key={id} title={title} image_path={image_path} href={url} target="_blank"/>
                        )
                    }
                </div>
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
    }
}

export default Footer;