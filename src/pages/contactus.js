import React from "react";
import ContactForm from "../components/contactform";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Feel free to contact with us for any kind of query.</h1>
        <p>
          Thank you for your interest in hiring us.
          We consider communication with the customer.
        </p>
      </div>
      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <div className="contact-card">
            <h2>Office Address</h2>
            <p>6323 Virginia Fields
              Drive, Katy, TX, 77494</p>
          </div>
          <div className="contact-card">
            <h2>Email</h2>
            <p>support@wowclean.com</p>
          </div>
          <div className="contact-card">
            <h2>Phone No:</h2>
            <p>Head office: +1 555-555-5555</p>
          </div>
          
        </div>
        {/* Contact Form */}
        <div className="contact-form-container">
        <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;