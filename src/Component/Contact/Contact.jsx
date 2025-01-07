import React from "react";
import { useRef } from "react";
import { MdLocationPin, MdPhoneIphone, MdMarkEmailRead } from "react-icons/md";
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qlqzeiq",
        "template_dsd0202",
        form.current,
        "0aNSDPz1pQIKgx87Q"
      )
      .then(
        (result) => {
          alert("Message Sent");
        },
        (error) => {
          alert("Failed");
        }
      );

      e.target.reset()
  };

  return (
    <div>
      <div className="co-wrapper">
        <div className="co-container">
          <div className="c-head">
            <div className="empty"></div>
            <span>Contact</span>
          </div>
          <div className="con-sides">
            <div className="con-left">
              <form className="form" ref={form} onSubmit={sendEmail}>
                <div className="first-inputs">
                  <div className="f-ns">
                    <label>Name</label>
                    <input type="text" name="from_name" />
                  </div>
                  <div className="s-ns">
                    <label>Phone</label>
                    <input type="number" name="from_phone" />
                  </div>
                </div>
                <label>Email</label>
                <input type="email" name="from_email" />
                <label>Message</label>
                <textarea name="message" cols="30" rows="10"></textarea>
                <button style={{
                  cursor: "pointer"
                }}>Submit</button>
              </form>
            </div>
            <div className="con-right">
              <span className="head-span">Contact Detail</span>
              <div className="location">
                <MdLocationPin color="crimson" />
                <span>34 Street Name, City Name Here, United States</span>
              </div>
              <div className="location">
                <MdPhoneIphone color="crimson" />
                <span>+2348122617025</span>
              </div>
              <div className="location">
                <MdMarkEmailRead color="crimson" />
                <span>lighsamuel10@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
