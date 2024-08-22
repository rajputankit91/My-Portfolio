import React, { useEffect } from "react";
import "./contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <>
      <section className="Contact" id="contact" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <div className="section-container">
          <h1 className="title">Contact me</h1>

          <div className="contact-content">
            <div className="column-left">
              <div className="text">Reach Out to me!</div>
              <p>
                Discuss a Project or just want to say Hi? My inbox is open for
                all.
              </p>
              <div className="icons">
                <div className="row">
                  <span className="spanbox1">Name :</span>
                  <span className="spanbox2">Ankit Kumar</span>
                </div>
                <div className="row">
                  <span className="spanbox1">Address :</span>
                  <span className="spanbox2">Bijnor, India</span>
                </div>
                <div className="row">
                  <span className="spanbox1">E-mail :</span>
                  <span className="spanbox2">ankitrajput10791@gmail.com</span>
                </div>
                <div className="row">
                  <span className="spanbox1">Contact no :</span>
                  <span className="spanbox2">+91 8851094318</span>
                </div>
              </div>
            </div>
            <div className="column-right">
              <form
                action="https://formspree.io/f/xwkdwgrq"
                method="POST"
                className="contact-inputs"
              >
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Name..." name="name"></input>
                  </div>
                  <div className="field email">
                    <input
                      type="email"
                      placeholder="Email..."
                      name="email"
                    ></input>
                  </div>
                </div>
                <div className="fields">
                  <input
                    type="text"
                    placeholder="Subject..."
                    name="message"
                  ></input>
                </div>
                <div className="fields textarea">
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="message"
                  ></textarea>
                </div>
                <div className="btn">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;