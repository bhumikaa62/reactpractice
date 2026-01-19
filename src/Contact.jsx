import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact For Any Query</h1>
      <p>123 Street, New York, USA</p>
      <p>Email : info@example.com</p>
      <p>Phone : +012 345 6789</p>

      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Leave a message here" rows="5" required></textarea>
          <input type="text" placeholder="Company" />
          <button type="submit">Send Message</button>
        </form>
      </div>

      <p className="note">
        The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.
      </p>
    </div>
  );
};

export default Contact;
