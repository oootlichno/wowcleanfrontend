import React from "react";
import bannerImage from "../img/image 70.png";
import shape from "../img/Shape.png";

const Banner = () => {
  return (
    <div className="main">
      <div className="shape-container">
        <img src={shape} alt="Shape Background" className="shape-image" />
      </div>
      <div className="banner">
        <div className="banner-text">
          <h1>WOWCLEAN by CPG</h1>
          <h2>One Toilet at a Time</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
          </p>
          <div className="banner-button">
            <a href="#quote-form-section" className="quote-button">
              Get a Quote
            </a>
          </div>
        </div>
        <img
          src={bannerImage}
          alt="WOWClean Banner"
          className="banner-image"
        />
      </div>
    </div>
  );
};

export default Banner;

 