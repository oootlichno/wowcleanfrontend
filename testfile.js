.service-card {
  display: flex;
  flex-direction: column; /* Stack content vertically */
  align-items: center; /* Center-align content */
  justify-content: flex-start; /* Align content to the top */
  padding: 20px; /* Adjust padding to match design */
  gap: 12px; /* Adjust gap between text elements */
  height: 356px; /* Set consistent height */
  border-radius: 10px; /* Rounded corners */
  background: var(--White, #FFF);
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 0px 6px 0px rgba(0, 0, 0, 0.07);
}

.service-icon {
  display: block;
  width: 100%; /* Make image width responsive */
  height: 220px; /* Set consistent height */
  border-radius: 10px 10px 0 0; /* Round top corners */
  object-fit: cover; /* Maintain aspect ratio */
}

.service-description {
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #071D49;
  margin: 0;
}

.readmore {
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #071D49;
  text-decoration: none;
  cursor: pointer;
  margin: 0;
}