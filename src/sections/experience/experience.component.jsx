import React from "react";
import "./experience.styles.scss";
import Informational from "../../components/informational/informational.component";
import SkillsOverview from "../../components/skills-overview/skills-overview.component";
import WorkExperience from "../../components/work-experience/work-experience.component";

const Experience = () => (
    <section id="experience">
        <Informational title="Experience">
            <SkillsOverview/>
            <WorkExperience/>
        </Informational>
    </section>
);

export default Experience;