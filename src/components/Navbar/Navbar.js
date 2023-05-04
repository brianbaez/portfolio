import React, {useState} from "react";
import {navItems} from "./NavbarItems";

// Components

function Navbar({navLogoRef, navListRef, navToggleRef}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const toggleDarkMode = () => {
    if(!darkMode) {
      document.querySelector(":root").style.setProperty("--clr-primary", "#FFF");
      document.querySelector(":root").style.setProperty("--clr-secondary", "#102734");
      document.querySelector(".nav__dark-mode").classList.replace("fa-moon", "fa-sun");

      setDarkMode(true);
    }
    else {
      document.querySelector(":root").style.setProperty("--clr-primary", "#102734");
      document.querySelector(":root").style.setProperty("--clr-secondary", "#FFF");
      document.querySelector(".nav__dark-mode").classList.replace("fa-sun", "fa-moon");

      setDarkMode(false);
    }
  }

  return (
    <div className="Navbar">
      <nav className="nav">
        <div className="nav__logo" ref={navLogoRef}>
          <a className="nav__link" href="#hero">Brian Baez</a>
        </div>

        <div className={`nav__menu` + (menuOpen ? ` nav__menu__open` : ``)}>
          <ul className="nav__list" ref={navListRef}>
            {navItems.map((item, index) => {
              return (
                <li key={index} className="nav__item">
                  <a className="nav__link" href={`#${item.name.toLowerCase()}`} onClick={toggleMenu}>{item.name}</a>
                </li>
              );
            })}
            <a className="nav__dark-mode far fa-moon" id="nav__dark-mode" onClick={toggleDarkMode}></a>
          </ul>
        </div>

        <button className={`nav__toggle` + (menuOpen ? ` nav__open` : ``)} onClick={toggleMenu} ref={navToggleRef}>
          <span className="nav__hamburger"></span>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
