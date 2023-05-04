import React from "react";
import {projectItems} from "./ProjectItems";

// Components

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container container__projects">
        <h2 className="section__title">Projects</h2>
        <div className="projects__showcase">
          {projectItems.map((item, index) => {
            return (
              <div key={index} className="project__item">
                <div className="project__image">
                  <img src={`${item.imageSrc}`} alt={`${item.imageAlt}`}></img>
                </div>
                <div className="project__description">
                  <h3 className="project__description__name">{item.name}</h3>
                  <p className="project__description__summary">{item.summary}</p>
                  <div className="project__description__skills">
                    <p>Technologies Used</p>
                    {item.technologies.map((item, index) => {
                      return (
                        <i key={index} className={`skill__icon ${item}`}></i>
                      );
                    })}
                  </div>
                  <div className="project__description__links">
                    <a className="button link-button" href={item.liveLink}>Live Demo</a>
                    <a className="button link-button" href={item.codeLink}>View Code</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
