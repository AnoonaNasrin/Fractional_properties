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
    <form onSubmit={handleSubmit} className="contact-form container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
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
              className="contact-form__input form-control"
            />
            <button type="submit" className="contact-form__button btn btn-dark">
              Submit
            </button>
          </div>
          <p className="contact-form__text">
            We'll never share your email with anyone else.
          </p>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
