import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Get in touch with ASIC for any queries or assistance.</p>
      <form className="contact-form">
        <label>Name:</label>
        <input type="text" placeholder="Your name" />
        
        <label>Email:</label>
        <input type="email" placeholder="Your email" />
        
        <label>Message:</label>
        <textarea placeholder="Your message"></textarea>
        
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
