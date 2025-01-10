import React from 'react';

const Contact = ({ phone }) => {
  return (
    <a href={`tel:${phone}`} className="phone-number">
      CALL  {phone}
    </a>
  );
};

export default Contact;