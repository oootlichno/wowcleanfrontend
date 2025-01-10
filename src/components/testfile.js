
@media (max-width: 1200px) {
    .service-header {
      flex-direction: column; /* Stack text and image vertically */
      align-items: center; /* Center-align content */
      gap: 30px; /* Ensure sufficient gap between text and image */
    }
  
    .service-text {
      text-align: center; /* Center-align the text */
    }
  
    .service-text h1 {
      font-size: 48px; /* Scale down heading size */
      margin-bottom: 16px; /* Reduce spacing below heading */
    }
  
    .service-image {
      width: 90%; /* Constrain image width */
      margin: 0 auto; /* Center the image */
    }

    .service-text {
        min-height: 200px; /* Ensure enough height for the text */
      }
  }

  @media (max-width: 1024px) {
    .service-header {
      gap: 20px; /* Slightly reduce gap for smaller screens */
    }
  
    .service-image img {
      max-width: 80%; /* Ensure the image scales down */
      height: auto; /* Maintain aspect ratio */
    }
  
    .service-text h1 {
      font-size: 40px; /* Further scale down heading size */
    }
  }


