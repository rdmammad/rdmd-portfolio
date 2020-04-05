import {combineReducers} from "redux";
import projectReducer from "./project/project.reducer";
import carouselResponsiveReducer from "./carousel-responsive/carousel-responsive.reducer";
import skillsReducer from "./skills/skills.reducer";
import socialsReducer from "./socials/socials.reducer";

const rootReducer = combineReducers({
    responsive: carouselResponsiveReducer,
    projects: projectReducer,
    skills: skillsReducer,
    socials: socialsReducer,
});

export default rootReducer;
