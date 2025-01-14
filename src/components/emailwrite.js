import React from 'react';

const Email = ({ email }) => {
  return (
    <a href={`mailto:${email}`} className="email-link">
      <i className="fas fa-envelope"></i> {email}
    </a>
  );
};

export default Email;