import React from "react";
import "./container.styles.scss";

const Container = ({title, img}) => (
    <div className="container__block">
        <img src={img} alt={title}/>
        <div className="container__info">
            <p>
                {title[0].toUpperCase() + title.slice(1)}
            </p>
        </div>
    </div>
);

export default Container;