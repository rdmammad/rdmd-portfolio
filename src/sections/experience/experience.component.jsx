import React from "react";
import "./experience.styles.scss";
import {SKILLS_DATA} from "./skills.data";
import Informational from "../../components/informational/informational.component";
import CustomIcon from "../../components/custom-icon/custom-icon.component";

class Experience extends React.Component {
    constructor() {
        super();

        this.state = {
            skills: SKILLS_DATA,
        };
    }


    render() {
        const {skills} = this.state;

        return (
            <section id="experience">
                <Informational title="Experience">
                    <Informational title="Technologies That I Have Enjoyed Working With:" sub_class="sub-block">
                        <div className="skill__list">
                            {
                                skills.map(({id, ...otherProps}) =>
                                    <CustomIcon key={id} {...otherProps}/>
                                )
                            }
                        </div>
                    </Informational>
                </Informational>
            </section>
        );

    }
}

export default Experience;