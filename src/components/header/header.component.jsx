import React from "react";
import "./header.styles.scss"
import Settings from "../settings/settings.component";

class Header extends React.Component{
    constructor(){
        super();

        this.state = {
            header_class: '',
        };
    }

    listenScrollEvent = () => {
        this.setState({header_class: window.scrollY > 100 ? 'active' : ''});
    };

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent);
    }

    render(){
        const {header_class} = this.state;

        return(
            <header id='project' className={header_class}>
                <h2>Raida Mammad</h2>
                <nav className="menu">
                    <a href="#projects">Projects</a>
                    {/*<a href="#about">About</a>*/}
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </nav>
                <Settings />
            </header>
        )
    }
}
export default Header;