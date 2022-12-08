import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import * as s from "./StyledComponents";
import "./contactStyles.css";
import { FaSpinner } from "react-icons/fa";

const EmailContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    console.log(form.current);

    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    const contactForm = document.querySelector(".contact__form");
    loading.classList += " element__visible";
    contactForm.classList += " element__invisible";

    emailjs
      .sendForm(
        "service_5j8510n",
        "template_5avzttl",
        form.current,
        "v3NxKCT8ZSbInMBEf"
      )
      .then(
        (result) => {
          loading.classList.remove("element__visible");
          success.classList += " element__visible";
        },
        (error) => {
          loading.classList.remove("element__visible");
          alert("there was a problem sending the message");
        }
      );
  };

  return (
    <div style={{ marginTop: 48 }}>
      <form ref={form} onSubmit={sendEmail} className="contact__form">
        <s.ContactFormLabel>Name</s.ContactFormLabel>
        <input
          type="text"
          name="user_name"
          className="contact__form--textarea"
        />
        <s.ContactFormLabel>Email</s.ContactFormLabel>
        <input
          type="email"
          name="user_email"
          className="contact__form--textarea"
        />
        <s.ContactFormLabel>Message</s.ContactFormLabel>
        <input name="message" className="contact__form--textarea" />
        <input type="submit" value="Submit" className="contact__form--input" />
      </form>
      <div className="modal__overlay modal__overlay--loading">
        <FaSpinner className="spinner" />
      </div>
      <div className="modal__overlay modal__overlay--success">
        Thanks for the message! We will get back to you soon.
      </div>
    </div>
  );
};

export default EmailContactForm;
