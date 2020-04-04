import React from "react";
import "./custom-icon.styles.scss";

const CustomIcon = ({title, image_path, ...otherProps}) => (
    <a {...otherProps}>
        <img
            className="custom-icon"
            src={image_path}
            alt={title}
            title={title}
        />
    </a>
);

export default CustomIcon;