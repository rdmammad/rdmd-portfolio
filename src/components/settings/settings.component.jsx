import React from "react";
import "./settings.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const Settings = () => (
    <div className="header_settings">
        {/*<div className="mode">White</div>*/}
        {/*<div className="language">EN</div>*/}
        <CustomButton link="https://drive.google.com/open?id=1YtCu1fDjBrypqJTpXvWLvpssGegoj-5z" target="_blank">
            <div className="cv_info">
                CV
            </div>
        </CustomButton>
    </div>
);

export default Settings;