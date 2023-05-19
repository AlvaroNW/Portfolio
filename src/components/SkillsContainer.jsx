import React from "react";
import SkillsItem from "./SkillsItem";



const SkillsContainer = ({ title, skills }) => {
    return (
        <div className="main-skills-container">
            <h3>{title}</h3>
            <div className="mapped-skills">
                {skills.map((item) => {
                    return (
                        <SkillsItem
                            title={item.title}
                            image={item.image}
                            styles={item.styles}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SkillsContainer;
