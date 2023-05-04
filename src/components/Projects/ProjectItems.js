// Imports
import homeLibraryImg from "../../assets/img/home-library.png";
import starWarsHolocronImg from "../../assets/img/star-wars-holocron.png";
import portfolioImg from "../../assets/img/portfolio.png";

export const projectItems = [
  {
    name: "HomeLibrary",
    summary: "A full-stack website built with the MERN stack along with a RESTful API. HomeLibrary allows users to catalog their book collections and keep track of their reading with private reading journals.",
    technologies: [
      "devicon-mongodb-plain",
      "devicon-express-original",
      "devicon-react-original",
      "devicon-nodejs-plain",
      "devicon-javascript-plain",
      "devicon-bootstrap-plain"
    ],
    liveLink: "https://stunning-gecko-4a513a.netlify.app/",
    codeLink: "https://github.com/brianbaez/home-library",
    imageSrc: homeLibraryImg,
    imageAlt: "home-library-image"
  },
  {
    name: "Star Wars Holocron",
    summary: "A small website built with React and Bootstrap that displays information taken from the Star Wars API. As a big fan of the franchise, this was quite fun to make!",
    technologies: [
      "devicon-react-original",
      "devicon-javascript-plain",
      "devicon-bootstrap-plain"
    ],
    liveLink: "https://brianbaez.github.io/star-wars-holocron/",
    codeLink: "https://github.com/brianbaez/star-wars-holocron",
    imageSrc: starWarsHolocronImg,
    imageAlt: "star-wars-holocron-image"
  },
  {
    name: "Portfolio",
    summary: "This portfolio website! It was the first project I created and features a responsive design, light/dark mode, and JavaScript animations using GSAP.",
    technologies: [
      "devicon-react-original",
      "devicon-html5-plain",
      "devicon-css3-plain",
      "devicon-javascript-plain",
      "devicon-sass-original"
    ],
    liveLink: "#",
    codeLink: "https://github.com/brianbaez/portfolio",
    imageSrc: portfolioImg,
    imageAlt: "portfolio-image"
  }
];
