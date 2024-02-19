import React from "react";
import { pdfjs } from "react-pdf";
export default function MainSection() {
  return (
    <section id="mainSection" className="main-section">
      {console.log("hello")}
      <div className="section-container">
        <div className="main-section-container">
          <div className="hello">Hello 👋 I'm</div>
          <div className="my-name">Ankit Kumar</div>
          <div className="text">And I'm a front End Developer</div>
          <a className="resume" href="resume.pdf" download="resume.pdf">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
