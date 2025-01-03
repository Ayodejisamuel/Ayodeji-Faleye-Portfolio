import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import "./ContactForm.css";
import Sent from "./Sent";

export const ContactUs = () => {
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [initial, setInitial] = useState(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_83lfa9b",
        "template_7sescoo",
        {
          from_name: contactName,
          message: message,
        },
        "Rclnwr9dQXGg57995"
      )
      .then(
        (result) => {
          console.log(result.text);
          setInitial(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {initial ? (
        <form onSubmit={sendEmail}>
          <div className="form-inputs">
            <label htmlFor="name">_name:</label>
            <input
              type="name"
              name="name"
              className="form-input"
              placeholder="your name"
              required
              onChange={(e) => setContactName(e.target.value)}
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="email">_email:</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="mail@gmail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="subject">_subject:</label>
            <input
              type="text"
              name="subject"
              className="form-input"
              placeholder="Your message"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="name">_message:</label>
            <textarea
              type="name"
              name="message"
              className="form-input"
              placeholder="Hey! can we discuss on a new project i have in mind?"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button>submit-message</button>
        </form>
      ) : (
        <Sent setInitial={setInitial} />
      )}
    </>
  );
};