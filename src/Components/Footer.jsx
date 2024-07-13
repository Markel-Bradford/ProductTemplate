import React, { useRef } from "react";
import "../Styles/Footer.css"

const Footer = () => {
  const form = useRef();

  //define where emails will be sent using emailjs
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendform("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-items">
            <h3 ><a className="footer-links" href="">About</a></h3>
            <h3 ><a className="footer-links" href="">Help</a></h3>
            <h3 ><a className="footer-links" href="">Products</a></h3>
        </div>
        <div className="contact-container">
          <h2 className="contact-title">Contact Us</h2>
          <div className="form">
            <form ref={form} onSubmit={sendEmail} className="email-form">
              {/*Group all relevant items into a form group div to format*/}
              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  placeholder="Jane Doe"
                />
                <label htmlFor="user_email">Email</label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  placeholder="jane.doe96@gmail.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="info">
                  Please provide details below about your friend and thier
                  needs:
                </label>
                <textarea name="info" id="info" cols="30" rows="10"></textarea>
              </div>
              <button type="submit" className="email-btn">
                <span id="send">Send Email</span>
                <i className="fa-solid fa-envelope"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="ownership">
        <p>All rights reserved &copy; 2024 Platinum Threads</p>
      </div>
    </div>
  );
};

export default Footer;