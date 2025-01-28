import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <h1>Dziękuję!</h1>
      <p>Twoja oferta została pomyślnie wysłana.</p>
      <p>Menadżer skontaktuje się z Tobą i przedstawi ofertę w ciągu 24 godzin.</p>
      <Link to="/" className="back-home-link">
      Powrót do strony głównej
      </Link>
    </div>
  );
};

export default ThankYou;