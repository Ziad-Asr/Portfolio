import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoSass } from "react-icons/io";
import { SiCss3 } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
// import { FaGitSquare } from "react-icons/fa";
// import { AiOutlineGithub } from "react-icons/ai";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiSequelize } from "react-icons/si";

import "./Skills.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills container section">
      <div class="sectionTitle">
        <span class="titleNumber">02 . </span>
        <h5 class="titleText">
          Skills
          <div class="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="skillsContainer grid">
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">1)Frontend Skills</h2>
          </div>
          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaHtml5 className="icon" />
              </div>
              <span className="skillName">HTML</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiCss3 className="icon" />
              </div>
              <span className="skillName">CSS</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaBootstrap className="icon" />
              </div>
              <span className="skillName">Bootstrap</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoSass className="icon" />
              </div>
              <span className="skillName">Sass</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoJavascript className="icon" />
              </div>
              <span className="skillName">JavaScript</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReactNative className="icon" />
              </div>
              <span className="skillName">React</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiRedux className="icon" />
              </div>
              <span className="skillName">Redux</span>
            </div>
          </div>
        </div>

        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">2) Backend Skills</h2>
          </div>
          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaNodeJs className="icon" />
              </div>
              <span className="skillName">Node.js</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiExpress className="icon" />
              </div>
              <span className="skillName">Express</span>
            </div>
            <div className="singleSkill">
              <div className="iconBox flex">
                <DiMongodb className="icon" />
              </div>
              <span className="skillName">MongoDB</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiSequelize className="icon" />
              </div>
              <span className="skillName">Sequelize</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
