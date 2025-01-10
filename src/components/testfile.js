/* Adjust About Section for Medium Screens (Tablets) */
@media (max-width: 1024px) {
    .about-page {
      padding: 20px;
    }
  
    .about-header {
      flex-direction: column; /* Stack elements */
      align-items: center;
      padding-left: 0; /* Center align on smaller screens */
    }
  
    .about-text {
      width: 100%; /* Make text take full width */
      text-align: center; /* Center-align text */
    }
  
    .about-text h1 {
      font-size: 48px; /* Reduce heading size */
    }
  
    .about-text p {
      font-size: 18px; /* Reduce paragraph font size */
    }
  
    .about-button {
      margin: 20px auto; /* Center the button */
    }
  
    .about-image img {
      max-height: 600px; /* Reduce image size for medium screens */
      margin: 0 auto; /* Center the image */
    }
  }
  
  /* Adjust for Small Screens (Mobile Devices) */
  @media (max-width: 768px) {
    .about-page {
      padding: 10px;
    }
  
    .about-text h1 {
      font-size: 36px; /* Further reduce heading size */
      margin-bottom: 16px; /* Reduce spacing */
    }
  
    .about-text p {
      font-size: 16px; /* Adjust font size */
    }
  
    .about-button {
      padding: 12px 20px; /* Adjust button size */
      width: 180px; /* Reduce button width */
    }
  
    .about-quote-button {
      font-size: 18px; /* Adjust button text size */
    }
  
    .about-image img {
      max-height: 400px; /* Further reduce image size */
    }
  }
  
  /* Adjust for Extra-Large Screens */
  @media (min-width: 2000px) {
    .about-page {
      max-width: 1800px; /* Restrict maximum width */
      margin: 0 auto; /* Center the content */
    }
  
    .about-text {
      max-width: 800px; /* Increase text width slightly */
    }
  
    .about-image img {
      max-height: 1000px; /* Allow larger images */
    }
  }


