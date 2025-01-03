/* Container Flex Setup */
.about-header {
  display: flex;
  justify-content: space-between; /* Separate text and image */
  align-items: flex-end; /* Align items to the bottom */
  position: relative;
  padding: 80px;
}

/* Image Styling */
.about-image img {
  width: auto;
  max-width: 100%;
  height: auto;
  object-fit: contain; /* Ensure proper scaling */
  align-self: flex-end; /* Ensure alignment to bottom */
}

/* Background Shape */
.shape-image-about {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0; /* Place behind content */
  transform: translateY(10%); /* Adjust alignment */
}

/* Button */
.about-button {
  align-self: flex-start; /* Align button with text */
  margin-top: 30px;
  z-index: 1;
}