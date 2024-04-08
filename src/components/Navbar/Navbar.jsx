import { useState } from "react";

import { TbGridDots } from "react-icons/tb";
import { AiFillCloseCircle } from "react-icons/ai";
import cv from "../../assests/CV.pdf";

import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNavbar = () => {
    setActive("navBar activeNavbar");
  };

  const removeNavbar = () => {
    setActive("navBar");
  };

  const [activeHeader, setActiveHeader] = useState("header");

  const addBg = () => {
    if (window.scrollY >= 10) {
      setActiveHeader("header activeHeader");
    } else {
      setActiveHeader("header");
    }
  };

  window.addEventListener("scroll", addBg);

  return (
    <header className={activeHeader}>
      <div className="logoDiv">
        <h1 className="logo">
          <a href="#home">Ziad.</a>
        </h1>
      </div>

      <div className={active}>
        <ul onClick={removeNavbar} className="navLists">
          <li className="navItem">
            <a href="#about" className="navLink">
              <span className="headerNumber">1.</span>About
            </a>
          </li>
          <li className="navItem">
            <a href="#skills" className="navLink">
              <span className="headerNumber">2.</span>Skills
            </a>
          </li>
          <li className="navItem">
            <a href="#projects" className="navLink">
              <span className="headerNumber">3.</span>Projects
            </a>
          </li>
          <li className="navItem">
            <a href="#contact" className="navLink">
              <span className="headerNumber">4.</span>Contact
            </a>
          </li>
          <button className="btn">
            <a href={cv} download={cv}>
              Resume
            </a>
          </button>
        </ul>

        <div onClick={removeNavbar} className="closeNavbar">
          <AiFillCloseCircle className="icon" />
        </div>
      </div>

      <div onClick={showNavbar} className="toggleNavbar">
        <TbGridDots className="icon" />
      </div>
    </header>
  );
};

export default Navbar;
