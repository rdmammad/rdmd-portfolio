import React from "react";
import "./skills-overview.styles.scss";
import {SKILLS_DATA} from "./skills.data";
import Informational from "../informational/informational.component";
import CustomIcon from "../custom-icon/custom-icon.component";

class SkillsOverview extends React.Component {
    constructor() {
        super();

        this.state = {
            skills: SKILLS_DATA,
        };
    }


    render() {
        const {skills} = this.state;

        return (
            <Informational title="Technologies That I Have Enjoyed Working With:" sub_class="sub-block">
                <div className="skill__list">
                    {
                        skills.map(({id, ...otherProps}) =>
                            <CustomIcon key={id} {...otherProps}/>
                        )
                    }
                </div>
            </Informational>
        );

    }
}

export default SkillsOverview;