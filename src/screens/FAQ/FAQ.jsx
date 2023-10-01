import React from 'react';
import './FAQ.css';
import Header from '../../components/Header/Header';

function FAQ() {
  return (
    <div className="FAQ">
      <Header />
      <div className="FAQText">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-item">
          <h3>What technologies were used to build this AI Resource Manager?</h3>
          <p>
            The AI Resource Manager was developed using a combination of
            frontend and backend technologies. The frontend is built with
            React.js, a popular JavaScript library, while the backend uses
            Node.js for server-side scripting. 
          </p>
        </div>
        <div className="faq-item">
          <h3>Where does the data used by the AI Resource Manager come from?</h3>
          <p>
            The data used by the AI Resource Manager is self-generated. I created an array consisting of various resources (like Cranes and Berths) that could exist at PSA's ports.
          </p>
        </div>
        <div className="faq-item">
          <h3>How accurate is the AI resource allocation?</h3>
          <p>
            As this is a frontend mockup for PSA's Code Sprint Hackathon, the AI resource allocation is currently random. Upon pressing the button, the AI randomly sets resources to Available. However, ideally it should accurately reallocate resources perfectly to achieve high efficiency and utilisation of resources.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
