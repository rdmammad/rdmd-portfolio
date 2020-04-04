import React from "react";
import "./experience.styles.scss";
import Informational from "../../components/informational/informational.component";
import SkillsOverview from "../../components/skills-overview/skills-overview.component";

const Experience = () => (
    <section id="experience">
        <Informational title="Experience">
            <SkillsOverview/>
        </Informational>
    </section>
);

export default Experience;