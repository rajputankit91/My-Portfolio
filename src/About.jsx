import React from "react";
import myPhoto from "../images/Ankit'sph.png";
export default function About() {
  return (
    <section id="about" className="about-section">
      
      <div className="section-container">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="left column">
            <img src={myPhoto} width={325} height={325} alt="my-photo" />
          </div>
          <div className="right column">
            <h2>I'm ankit kumar</h2>
            <p>
              I'm a front End Developer proficient in a wide array of web
              development technologies. I specialize in JavaScript, React,
              HTML5, CSS, REST APIs, Git, advanced JavaScript concepts, Redux,
              and responsive web design. I am adept at creating intuitive user
              interfaces and collaborating with cross-functional teams to
              deliver exceptional web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
