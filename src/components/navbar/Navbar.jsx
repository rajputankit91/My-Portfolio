import React from "react";
import "./navbar.css";

const Navbar = () =>{

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Ankit Kumar</div>
        <span> toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
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
    </div>
  )
}

export default Navbar;