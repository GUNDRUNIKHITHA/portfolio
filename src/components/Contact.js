import React from 'react';
import './Contact.css';

function Contact() {
  const handleSendClick = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:nikhitha18.gundru@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea id="message" className="form-textarea"></textarea>
        </div>
        <button type="button" className="contact-button" onClick={handleSendClick}>Send</button>
      </div>
    </div>
  );
}

export default Contact;
