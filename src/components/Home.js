import React, {useEffect, useRef} from "react";
//import gsap from "gsap";

// Components
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

function Home() {
    const heroIntroRef = useRef();
    const socialMediaRef = useRef();
    const navLogoRef = useRef();
    const navListRef = useRef();
    const navToggleRef = useRef();
    const arrowRef = useRef();
  
    // useEffect(() => {
    //     gsap.timeline()
    //         .from(heroIntroRef.current, {opacity: 0, duration: 0.5, y: 75})
    //         // .from(socialMediaRef.current, {opacity: 0, duration: 0.5})
    //         // .from(navLogoRef.current, {opacity: 0, duration: 0.25, y: -50})
    //         // .from(navListRef.current, {opacity: 0, duration: 0.25, y: -50}, "-=0.25")
    //         // .from(navToggleRef.current, {opacity: 0, duration: 0.25, y: -50}, "-=0.25")
    //         // .from(arrowRef.current, {opacity: 0, duration: 0.25}, "=-0.25");
    // });

    return (
        <div className="App">
            <header>
                <Navbar
                    navLogoRef={navLogoRef}
                    navListRef={navListRef}
                    navToggleRef={navToggleRef}
                />
                <Hero
                    heroIntroRef={heroIntroRef}
                    socialMediaRef={socialMediaRef}
                    arrowRef={arrowRef}
                />
            </header>
            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe />
            <Footer />
        </div>
    );
}

export default Home;