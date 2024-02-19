import React from "react";
import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    window.scrollY ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={`${navbar ? "navbar active" : "navbar"}`}>
      <div className="section-container">
        <div className="logo-div">
          <a href="#">
            Portfo<span>lio.</span>
          </a>
        </div>

        <ul className="navList">
          <li>
            <a href="#mainSection">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="hamberMenu"><IoMdMenu /></div>
      </div>
    </nav>
  );
}
