import React from "react";
import {skillsItems} from "./SkillsItems";

// Components

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container container__skills">
        <h2 className="section__title">Skills</h2>
        <div className="skills__icons">
          {skillsItems.map((item, index) => {
            return (
              <div key={index} className="skill__box">
                <i className={`skill__icon ${item.icon}`}></i>
                <p className="skill__name">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
