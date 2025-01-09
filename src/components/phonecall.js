import React from 'react';

const Contact = ({ phone }) => {
  return (
    <a href={`tel:${phone}`} className="phone-number">
      Call  {phone}
    </a>
  );
};

export default Contact;