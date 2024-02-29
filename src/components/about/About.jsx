import React from "react";
import "./about.css";
import Github from "../../images/Github.webp";
import linkedin from "../../images/linkedin.webp";
import vector1 from "../../images/mainimg.jpg";

const About = () =>{

  return (
    <div className="intro" id="intro">
      <div className="i-left">

        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Ankit Kumar</span>
          <span>and I'm a Frontend Developer</span>
        </div>

        {/* <button className="button i-button">Download Resume</button> */}
        <a className="resume" href="resume.pdf" download="resume.pdf">
            Download Resume
        </a>
        <div className="i-icons">
          <a className="resume" href="https://github.com/rajputankit91" target="_blank">
            <img src={Github} alt=""/>
          </a>

          <a className="resume" href="https://www.linkedin.com/in/ankit-kumar-5180b7283/" target="_blank">
            <img src={linkedin} alt=""/>
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={vector1} />
      </div>

    </div>
  )
}

export default About;