import React from "react";
import bannerImage from "../img/image 70.webp";
import shape from "../img/Shape.png";

const Banner = () => {
  return (
    <div className="main">
      <div className="shape-container">
        <img src={shape} alt="Shape Background" className="shape-image" />
      </div>
      <div className="banner">
        <div className="banner-text">
          <h1>WOWCLEAN</h1>
{/*           <h2>One Toilet at a Time</h2>
 */}          <p>
          Brak higieny brudzi Twoją reputację. Podobnie jak choroba, brudna reputacja będzie się rozprzestrzeniać, dopóki nie zostanie zwalczona u źródła.

W przeciwieństwie do większości usług sprzątania, które rzadko wykraczają poza czyszczenie powierzchni, nasz program sanityzacji toalet WowClean dociera do miejsc, których nie widać — gdzie rozwijają się i rozmnażają chorobotwórcze zarazki i bakterie. Zajmujemy się tym nagromadzeniem u źródła, a następnie zapewniemy że problem nie powróci.

Z dumą oferujemy różnorodne, niedrogie usługi sprzątania komercyjnego toalet każdej branży.

          </p>
          <div className="banner-button">
            <a href="#quote-form-section" className="quote-button">
            Uzyskaj wycenę
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
 