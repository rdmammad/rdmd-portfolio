import React from "react";
import "./skills-overview.styles.scss";
import Informational from "../informational/informational.component";
import CustomIcon from "../custom-icon/custom-icon.component";
import {connect} from "react-redux";

const SkillsOverview = ({skills}) => (
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

const mapStateToProps = ({skills}) => ({
    skills: skills.skills_list,
});

export default connect(mapStateToProps)(SkillsOverview);