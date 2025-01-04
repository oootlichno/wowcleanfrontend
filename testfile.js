/* Background Shape */
.shape-image-about {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Ensure it's below other content */
  transform: translateY(-15%);
  pointer-events: none; /* Prevent interaction with the shape */
}

/* About Page */
.about-page {
  position: relative;
  z-index: 1; /* Ensure content is above the shape */
}

/* Quote Section */
.quote-section {
  position: relative;
  z-index: 2; /* Ensure it appears above the background shape */
  background-color: white; /* Optional: Set a background color if needed */
  padding: 40px; /* Add some spacing for better appearance */
  border-radius: 10px; /* Match other styles if applicable */
}