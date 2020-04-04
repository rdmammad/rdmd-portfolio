import React from "react";
import "./work-experience.styles.scss";
import Informational from "../informational/informational.component";

class WorkExperience extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            experience_list: [],
        };
    }

    render() {
        return (
            <Informational title="My work experiences:" sub_class="sub-block">
            </Informational>
        );
    }
}

export default WorkExperience;