import React from "react";
import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  useEffect(() => {
    ScrollReveal().reveal(".contact__container", {
      origin: "bottom",
      distance: "50px",
      duration: 800,
      delay: 200,
      easing: "ease-out",
      reset: false,
    });
  });

  return (
    <section className="contact section" id="contact">
      <div className="section__title-flexwrapper" id="contact-wrapper">
        <h2 className="section__title" id="contact-title">
          Contact
        </h2>
        <img
          src="src/assets/images/Diamond.svg"
          alt="Decorative diamond"
          className="contact__decoration"
        />
      </div>
      <h3 className="section__subtitle">Get in touch</h3>
      <div className="contact__container container grid">
        <div className="contact__method-group">
          <i className="ri-mail-line"></i>
          <h4 className="contact__method-data">
            <a href="mailto:henryprosser@yahoo.co.uk">
              henryprosser@yahoo.co.uk
            </a>
          </h4>
        </div>
        <p className="contact__or">OR</p>
        <div className="contact__method-group" id="contact-message">
          <i className="ri-send-plane-line"></i>
          <h4 className="contact__method-data">Write me a message</h4>
        </div>

        <form className="contact__form grid" onSubmit={handleSubmit}>
          <div className="input__group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              required
            />
          </div>

          <div className="input__group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="johnsmith@example.com"
              required
            />
          </div>

          <div className="input__group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Hey, I'm interested in..."
              required
            ></textarea>
          </div>

          <button type="submit" className="contact__submit">
            Submit
            <i className="ri-arrow-right-up-line" id="submit__arrow"></i>
          </button>
        </form>
      </div>
    </section>
  );
}
