import { VscCloudDownload } from "react-icons/vsc";
import image from "../../assests/Ziad.jfif";
import cv from "../../assests/CV.pdf";

import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about section container">
      <div class="sectionTitle">
        <span class="titleNumber">01 . </span>
        <h5 class="titleText">
          About Me
          <div class="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
            I am a FullStack MERN deveoper with experience of 1 year.
            <br />
            Have experience with HTML5, CSS3, Bootstrap, Sass, Javascript,
            React, Redux, MaterialUI, Node.js, Express, MongoDB, Mongoose and
            Seqelize.
          </h4>

          <div className="aboutBtn">
            <a className="flex" href={cv} download={cv}>
              Download CV <VscCloudDownload />
            </a>
          </div>
        </div>

        <div className="aboutImgDiv">
          <img className="aboutImg" src={image} alt="Ziad" />
        </div>
      </div>
    </section>
  );
};

export default About;
