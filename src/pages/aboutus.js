import React, { useState } from "react";
import image from "../img/wowclean_clean.webp";
import QuoteForm from "../components/quote";
import shape from "../img/Shape.png";

const AboutUs = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const handleGetQuoteClick = () => {
    setShowQuoteForm(true);
    setTimeout(() => {
      document.getElementById("quote-section").scrollIntoView({ behavior: "smooth" });
    }, 100); 
  };

  return (
    <div className="about-page">
  {/* Background Shape */}
  <div class="shape-container">
  <img src={shape} alt="Background Shape" className="shape-image-about" />
</div>

  {/* About Header */}
  <div className="about-header">
    <div className="about-text">
      <h1>O nas</h1>
      <p>
      Witamy w WOW Clean! Dzięki wieloletniemu doświadczeniu jesteśmy dumni z oferowania najwyższej jakości usług sprzątania toaletów. Nasz oddany zespół dba o to, aby Twoja przestrzeń była nieskazitelnie czysta, wykorzystując przyjazne dla środowiska produkty i zaawansowane techniki. Zobowiązujemy się do zapewniania wyjątkowej obsługi klienta, dostosowanej do Twoich unikalnych potrzeb. Pozwól nam zająć się sprzątaniem twego WC, bo pierwsze wrazenie twoich klijentow ma znaczenie. Zobowiązujemy się do zapewniania wyjątkowej obsługi, dostosowanej do Twoich unikalnych potrzeb.
      </p>
      
      {/* Centered Button */}
      <div className="about-button">
        <button className="about-quote-button" onClick={handleGetQuoteClick}>
        Uzyskaj wycenę
        </button>
      </div>
    </div>
    <div className="about-image">
      <img src={image} alt="About Us" />
    </div>
  </div>

      {/* Conditionally Render Quote Form */}
      {showQuoteForm && (
        <div id="quote-section" className="quote-section">
          <QuoteForm />
        </div>
      )}
    </div>
  );
};

export default AboutUs;