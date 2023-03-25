import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting email: ${email}`);
    // Send email to backend or perform other actions
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2 className="contact-form__title">Get in touch with us</h2>
      <label htmlFor="email" className="contact-form__label"></label>
      <div className="contact-form__input-container">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
          className="contact-form__input"
        />
        <button type="submit" className="contact-form__button">
          Submit
        </button>
      </div>
      <p className="contact-form__text">
        We'll never share your email with anyone else.
      </p>
    </form>
  );
}

export default ContactForm;
