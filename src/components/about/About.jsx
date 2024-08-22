import React, { useEffect } from "react";
import "./about.css";
import vector1 from "../../images/mainimg.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
const About = () =>{

  useEffect(() =>{
    Aos.init({duration:2000});
  },[])

  return (
    <section className="intro" id="intro">
      <div className="i-left" data-aos="fade-down-right" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
        
        <div className="i-name">
          <span>Hey there, </span>
          <span>Ankit here 👋</span>
          <span>and I'm a Frontend Developer</span>
        </div>

        <a className="resume" href="resume.pdf" download="resume.pdf">
          Download Resume
        </a>
        
        <div className="i-icons">
        
          <a className="resume" href="https://github.com/rajputankit91" target="_blank">
            <FaGithub className="gitHub Icon" />
          </a>

          <a className="resume" href="https://www.linkedin.com/in/ankit-kumar-5180b7283/" target="_blank">
            <FaLinkedinIn className="linkedIn Icon" />
          </a>
        
        </div>
      
      </div>

      <div className="i-right" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
        <img src={vector1} />
      </div>

    </section>
  )
}

export default About;