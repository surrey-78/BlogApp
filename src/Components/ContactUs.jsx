import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
      <><h2 className="contact-title">Contact Us</h2><form className="contact-form">
      <div className="form-group">
        <label className="label" htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" className="input-field" />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" className="input-field" />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" className="textarea-field"></textarea>
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form></>
  );
};

export default ContactUs;
