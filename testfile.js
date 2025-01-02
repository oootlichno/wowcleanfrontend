return (
  <div className="about-page">
    {/* Background Shape */}
    <img src={shape} alt="Shape Background" className="shape-image" />

    {/* Header Section */}
    <div className="about-header">
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          Welcome to WOWClean! With years of experience, we pride ourselves on offering
          top-notch cleaning services to industries. Our dedicated team ensures your space is
          spotless, using environmentally friendly products and advanced techniques.
        </p>
        <p>
          We are committed to providing exceptional customer service, tailored to meet your
          unique needs. Let us take care of the cleaning so you can focus on what matters most.
        </p>

        {/* Centered Button */}
        <div className="about-button">
          <button className="about-quote-button" onClick={handleGetQuoteClick}>
            Get a Quote
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