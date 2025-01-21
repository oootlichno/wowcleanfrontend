import React from "react";
import ContactForm from "../components/contactform";
import shape from "../img/Shape.png";
import phone_image from "../img/bxs_phone-call.png";
import email_image from "../img/email-unread.png";
import office_image from "../img/Office_contact.png";

const ContactUs = () => {
  return (
<div className="contact-page">
  {/* Background Shape */}
  <div className="shape-container">
    <img src={shape} alt="Background Shape" className="shape-image" />
  </div>

  {/* Contact Information Section */}
  <div className="contact-info-section">
    <div className="contacts-title">Our contact information</div>
    <div className="contacts-container">
      <div className="contact-info-grid">
        <div className="contact-card">
          <img src={office_image} alt="Office Icon" className="contacts-icon" />
          <div className="contact-card-text">
          <h2>Office Address:</h2>
          <p>Puławska 233, 02-715 Warsaw, Poland</p>
          </div>
        </div>
        <div className="contact-card">
          <img src={email_image} alt="Email Icon" className="contacts-icon" />
          <div className="contact-card-text">
          <h2>Email:</h2>
          <p>help@wowclean.pl</p>
        </div>
        </div>
        <div className="contact-card">
          <img src={phone_image} alt="Phone Icon" className="contacts-icon" />
          <div className="contact-card-text">
          <h2>Phone No:</h2>
          <p>Head office: +48734126837</p>
        </div>
        </div>
      </div>
      <div className="google-map">
        <iframe
          title="Google Map of Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.7658860725605!2d21.018679076793486!3d52.174949871972714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471932c384083ff5%3A0x4d3d2e58f58764ed!2sPu%C5%82awska%20233%2C%2002-715%20Warszawa%2C%20Poland!5e0!3m2!1sen!2sus!4v1736301508412!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
  
    {/* Contact Form Section */}
    <div className="contact-form-section">
      <h1 className="form-title">Feel free to contact us for any kind of query.</h1>
      <p className="form-description">
        Thank you for your interest in hiring us. We consider communication with the customer.
      </p>
      <ContactForm />
    </div>
  </div>
  );
};

export default ContactUs;
