import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import "./navbar.css";
import { FaReact } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  const ToggleNavbar = () => {
    setShowNavbar(!showNavbar);
    console.log(showNavbar);
  }

  const handleHideNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar"
      data-aos="fade-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="section-container">

        <div className="n-left">
          <FaReact />
        </div>

        <ul className={`${showNavbar ? "navList active" : "navList"}`}>
          <li onClick={handleHideNavbar}>
            <a href="#intro">Home</a>
          </li>
          <li onClick={handleHideNavbar}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={handleHideNavbar}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={handleHideNavbar}>
            <a href="">Experiences</a>
          </li>
          <li onClick={handleHideNavbar}>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>

        <div className="hamberMenu" onClick={ToggleNavbar}><IoMdMenu /></div>
      </div>

    </nav>
  )
}

export default Navbar;