import React from "react";
import "./footer.css";

const Footer = () =>{
  return (
    <>
      <footer className="footer" id="footer">
        <div className="footer-box">
          <span>
            Created By
            <a
              href="https://www.linkedin.com/in/ankit-kumar-5180b7283/"
              target="_blank"
            >
              {" "}
              Ankit Kumar
            </a>
          </span>
          <div>ankitrajput10791@gmail.com</div>
        </div>
        <div className='footerEnd'>Copyright © 2023 Personal Portfolio</div>
      </footer>
    </>
  );
}

export default Footer;