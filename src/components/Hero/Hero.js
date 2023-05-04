import React from "react";
import {socialMediaItems} from "./SocialMediaItems";

// Components

function Hero({heroIntroRef, socialMediaRef, arrowRef}) {

  return (
    <section className="hero" id="hero">
      <div className="container container__hero">
        <div className="hero__intro" ref={heroIntroRef}>
          <h2 className="section__title hero__hello">Hi, I'm</h2>
          <h1 className="section__title hero__name">Brian Baez</h1>
          <h2 className="section__title hero__position">Full Stack Developer</h2>
        </div>

        <div className="hero__social-media" ref={socialMediaRef}>
          <ul className="hero__social-media__list">
            {socialMediaItems.map((item, index) => {
              return (
                <li key={index} className="hero__social-media__item">
                  <a className={`hero__social-media__link ${item.icon}`} href={item.href} target={item.target}></a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hero__arrow bounce">
          <a className="arrow fas fa-chevron-down" href="#about" ref={arrowRef}></a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
