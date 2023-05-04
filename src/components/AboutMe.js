import React from "react";

//Components

function AboutMe() {
  return (
    <section className="about-me" id="about">
      <div className="container container__about-me">
        <h2 className="section__title">About Me</h2>
        <div className="about-me__bio">
          <p>Hi! I'm Brian, a <span>Full Stack Developer</span> who loves to build responsive web applications with <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, and the <span>MERN stack</span>.</p>
          <p>I'm dedicated to learning new technologies that can help me improve my coding skills.</p>
          <p>Aside from coding, my interests include <span>video games</span>, <span>music</span>, <span>reading</span>, <span>biology</span>, and <span>astronomy</span>.</p>
          <p>Feel free to send me a message!</p>
        </div>
        <div className="about-me__contact-button">
          <a className="button" href="#contact">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
