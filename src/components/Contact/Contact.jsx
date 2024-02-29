import React from "react";

const Contact = () =>{
  return (
    <>
      <section className="Contact" id="contact">
        <div className="section-container">
          <h2 className="title">Contact me</h2>

          <div className="contact-content">
            <div className="column left">
              <div className="text">Reach Out to me!</div>
              <p>
                Discuss a Project or just want to say Hi? My inbox is open for
                all.
              </p>
              <div className="icons">
                <div className="row">
                  <p>Name</p>
                  <p>Ankit Kumar</p>
                </div>
                <div className="row">
                  <p>Address</p>
                  <p>Bijnor, India</p>
                </div>
                <div className="row">
                  <p>E-mail</p>
                  <p>ankitrajput10791@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Message me</div>
              <form
                action="https://formspree.io/f/xwkdwgrq"
                method="POST"
                className="contact-inputs"
              >
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Name" name="name"></input>
                  </div>
                  <div className="field email">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                    ></input>
                  </div>
                </div>
                <div className="fields">
                  <input
                    type="text"
                    placeholder="Subject"
                    name="message"
                  ></input>
                </div>
                <div className="fields textarea">
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="Describe projects"
                  ></textarea>
                </div>
                <div className="button">
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