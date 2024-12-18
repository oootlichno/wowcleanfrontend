import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <h1>Thank You!</h1>
      <p>Your quote has been submitted successfully.</p>
      <p>A manager will contact you and provide the quote within 24 hours.</p>
      <Link to="/" className="back-home-link">
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYou;