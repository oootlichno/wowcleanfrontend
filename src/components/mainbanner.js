import React from "react";
import bannerImage from "../img/cleaning-service_wow.png";

const Banner = () => {
    return (
      <div className="banner">
      <img src={bannerImage} alt="WOWClean Banner" className="banner-image" />
      <div className="banner-button">
        <a href="#quote-form-section" className="quote-button">Get a Quote</a>
      </div>
    </div>
    );
  };
  
  export default Banner;

 