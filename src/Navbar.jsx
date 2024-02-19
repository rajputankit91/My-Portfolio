import React from "react";
import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [showNavbar,setShowNavbar] = useState(false);

  const changeBackground = () => {
    window.scrollY ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", changeBackground);

  const ToggleNavbar = () =>{
    setShowNavbar(!showNavbar);
    console.log(showNavbar);
  }

  const handleHideNavbar = () =>{
    setShowNavbar(!showNavbar)
  }
  return (
    <nav className={`${navbar ? "navbar active" : "navbar"}`}>
      <div className="section-container">
        <div className="logo-div">
          <a href="#">
            Portfo<span>lio.</span>
          </a>
        </div>

        <ul className= {`${showNavbar ? "navList active" : "navList" }`}>
          <li onClick={handleHideNavbar}>
            <a href="#mainSection">Home</a>
          </li>
          <li onClick={handleHideNavbar}>
            <a href="#about">About</a>
          </li>
          <li onClick={handleHideNavbar}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={handleHideNavbar}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={handleHideNavbar}>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className= "hamberMenu" onClick={ToggleNavbar}><IoMdMenu /></div>
      </div>
    </nav>
  );
}
