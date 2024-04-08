import { FiGithub } from "react-icons/fi";
import FoodApp from "../../assests/FoodApp-image.jpg";
import car from "../../assests/Car-Rental.jfif";
import ERP from "../../assests/ERP_Image.jpg";

import "./Projects.scss";

const data = [
  {
    id: 1,
    image: ERP,
    liveLink: "https://react-erp-admin-panel.netlify.app",
    github: "https://github.com/Ziad-Asr/MERN_Admin_Panell",
    title: "ERP System",
    desc: "ERP System for managing customers",
    tech1: "React",
    tech2: "Nodejs",
    tech3: "Javascript",
  },
  {
    id: 2,
    image: FoodApp,
    liveLink: "https://ziad-food-app.netlify.app",
    github: "https://github.com/Ziad-Asr/Food-App",
    title: "Food App",
    desc: "This is a food delivary app for fast food.",
    tech1: "React",
    tech2: "Javascript",
    tech3: "scss",
  },
  {
    id: 3,
    image: car,
    liveLink: "https://ziad-car-rental.netlify.app",
    github: "https://github.com/Ziad-Asr/Car-rental-App",
    title: "Car-rental App",
    desc: "An app for renting cars",
    tech1: "React",
    tech2: "Javascript",
    tech3: "css",
  },
];

const Project = () => {
  return (
    <section id="projects" className="projects container section">
      <div class="sectionTitle">
        <span class="titleNumber">03 . </span>
        <h5 class="titleText">
          Personal projects
          <div class="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="projectContainer grid">
        {data.map(
          ({
            id,
            github,
            image,
            liveLink,
            desc,
            title,
            tech1,
            tech2,
            tech3,
          }) => {
            return (
              <div key={id} className="singleProject">
                <div className="externalLinks flex">
                  <div className="githubIcon">
                    <a href={github} rel="noreferrer noopener" target="_blank">
                      <FiGithub className="icon" />
                    </a>
                  </div>
                </div>

                <div className="imgDiv">
                  <a href={liveLink} rel="noreferrer noopener" target="_blank">
                    <img src={image} alt={title} />
                  </a>
                </div>

                <div className="projectTitle">
                  <h3>{title}</h3>
                </div>

                <div className="desc">{desc}</div>

                <div className="technologies flex">
                  <small> {tech1} </small>
                  <small> {tech2} </small>
                  <small> {tech3} </small>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Project;
