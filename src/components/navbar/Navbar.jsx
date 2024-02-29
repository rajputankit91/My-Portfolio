import React, { useState } from "react";
import "./navbar.css";
import { IoMdMenu } from "react-icons/io";

const Navbar = () =>{
  const [navbar, setNavbar] = useState(false);
  const [showNavbar,setShowNavbar] = useState(false);

  const ToggleNavbar = () =>{
    setShowNavbar(!showNavbar);
    console.log(showNavbar);
  }

  return (
    <div className={`${navbar ? "n-wrapper active" : "n-wrapper"}`}>
      <div className="n-left">
        <div className="n-name">Ankit Kumar</div>
        <span> toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul className= {`${showNavbar ? "navList active" : "navList" }`}>
            <li>
              <a href="#intro">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>Experiences</li>
          </ul>
        </div>
        <button className="button n-button">
          <a href="#contact">Contact Us</a>
        </button>
      </div>
      <div className= "hamberMenu" onClick={ToggleNavbar}><IoMdMenu /></div>
    </div>
  )
}

export default Navbar;