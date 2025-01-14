import React from 'react';

const Contact = ({ phone }) => {
  return (
    <a href={`tel:${phone}`} className="phone-number">
      <i className="fas fa-phone"></i>  {phone}
    </a>
  );
};

export default Contact;