export default function ContactMe(){
    return (
        <>
            <div className="Contact">
                <div className="contact-container">

                    <div className="contact-heading-box">
                        <h2>Contact</h2>
                    </div>
                    <div className="contact-description">
                        <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                    </div>

                    <div className="contact-form">
                        <div className="contact-form-field">
                            <label>Name : </label>
                            <input type="text" placeholder="Enter Your Name"></input>
                        </div>

                        <div className="contact-form-field">
                            <label>Email : </label>
                            <input type="email" placeholder="Enter Your Email"></input>
                        </div>

                        <div className="contact-form-field">
                            <label>Message : </label>
                            <input type="text" placeholder="Enter Your Message"></input>
                        </div>

                        <div className="contact-submit">
                            <button type="submit" id="submitBtn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}