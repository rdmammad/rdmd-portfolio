import React from "react";
import "./informational.styles.scss";

const Informational = ({title, children, sub_class}) => (
    <div className={`informational__block ${sub_class ? sub_class : ""}`}>
        <h1 className="info-title">{title}</h1>
        <div className="info__description">
            {children}
        </div>
    </div>
);

export default Informational;