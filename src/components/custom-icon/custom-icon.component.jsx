import React from "react";
import "./custom-icon.styles.scss";

const CustomIcon = ({image_path, title}) => (
    <img
        className="custom-icon"
        src={image_path}
        alt={title}
        title={title}
    />
);

export default CustomIcon;