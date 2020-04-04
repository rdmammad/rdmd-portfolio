import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({link, children, ...otherProps}) => (
    <a className="rdmd__custom-button" href={link} {...otherProps}>
        {children}
    </a>
);

export default CustomButton;