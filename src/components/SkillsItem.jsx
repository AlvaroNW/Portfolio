import React from "react";


const SkillsItem = ({ title, image, styles }) => {
    return (
        <>
            <div className={styles}>
                <div className="skillImg-container">
                    <img src={image} alt="skill img" className="skillImg" />
                </div>
                <h1 className="skillTitle"> {title} </h1>
            </div>
        </>
    );
};

export default SkillsItem;
