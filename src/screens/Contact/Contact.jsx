import React from 'react';
import './Contact.css';
import Header from '../../components/Header/Header';

function Contact() {
  return (
    <div className="Contact">
      <Header />
      <div className="ContactText">
        <h1>CONTACT US</h1>
        <p>
          Do you have any questions about the AI resource Manager? <br />
          Do you have any suggestions and possible features for us to add? <br />
          <br /> Please drop us your queries below!
        </p>
      </div>
      <div className="ContactForm">
        <h2>Contact Form</h2>
        <form>
          <div className="FormField">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="FormField">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          <div className="FormField">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="FormField">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" />
          </div>
          <div className="SubmitButton">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
