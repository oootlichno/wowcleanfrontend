.contact-page {
  font-family: "Poppins", sans-serif;
  position: relative; /* Ensures a new stacking context for the entire page */
  background-color: white;
  overflow: hidden; /* Prevents clipping issues */
  padding: 40px;
}

/* Background Shape */
.shape-container {
  position: absolute; /* Keeps it in the background */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0; /* Places it behind everything else */
  pointer-events: none; /* Prevents interaction with the shape */
}

.shape-image {
  width: 100%;
  height: auto;
  position: absolute;
  top: -100px; /* Adjust positioning if necessary */
  left: 0;
  z-index: 0;
}

/* Contact Information Section */
.contact-info-section {
  position: relative; /* Ensures it's layered above the shape */
  z-index: 1; /* Places it above the shape */
  padding-top: 100px; /* Adds space for the shape */
}

.contacts-title {
  font-size: 36px;
  font-weight: 600;
  color: #071d49;
  margin-bottom: 32px;
  text-align: left;
  z-index: 2; /* Ensure it appears above other elements */
  position: relative; /* Ensure it's properly layered */
}

.contacts-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  margin-top: 40px;
}

.contact-info-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 400px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
}

.contacts-icon {
  width: 50px;
  height: 50px;
}

.contact-card h2 {
  font-size: 18px;
  font-weight: 700;
  color: #071d49;
}

.contact-card p {
  font-size: 16px;
  color: #6c757d;
}

/* Google Map */
.google-map {
  flex: 1;
  max-width: 800px;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
}