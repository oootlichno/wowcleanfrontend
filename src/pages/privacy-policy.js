import React from "react";
import shape from "../img/Shape.png";


const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">

        {/* Background Shape */}
  <div class="shape-container">
  <img src={shape} alt="Background Shape" className="shape-image-about" />
</div>
<div className="policy-text">

      <h1>Privacy Policy</h1>
      <p>
        Welcome to WoWClean. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our services.
      </p>
      
      <h3>1. Information We Collect</h3>
      <p>
        We collect the following types of information:
      </p>
      <ul>
        <li><strong>Personal Information:</strong> Your name, email address, phone number, and other contact details provided through our forms or communication channels.</li>
        <li><strong>Service Information:</strong> Details related to the services you request, including cleaning preferences, property details, and payment information.</li>
        <li><strong>Usage Data:</strong> Information about your interactions with our website, such as IP address, browser type, and pages visited, collected through cookies and similar technologies.</li>
      </ul>

      <h3>2. How We Use Your Information</h3>
      <p>
        The information we collect is used for:
      </p>
      <ul>
        <li>Providing and managing our services, including scheduling and completing cleaning appointments.</li>
        <li>Communicating with you regarding your inquiries, bookings, and feedback.</li>
        <li>Improving our website and services through analytics and user feedback.</li>
        <li>Ensuring compliance with legal obligations and protecting against fraudulent activities.</li>
      </ul>

      <h3>3. Sharing Your Information</h3>
      <p>
        We do not sell or share your personal information with third parties, except in the following cases:
      </p>
      <ul>
        <li>When required to comply with legal obligations or enforce our terms of service.</li>
        <li>With trusted service providers who assist in delivering our services (e.g., payment processors) and agree to keep your information confidential.</li>
      </ul>

      <h3>4. Data Security</h3>
      <p>
        We implement appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
      </p>

      <h3>5. Your Rights</h3>
      <p>
        You have the right to:
      </p>
      <ul>
        <li>Access and obtain a copy of your personal data.</li>
        <li>Request corrections to any inaccuracies in your personal data.</li>
        <li>Request the deletion of your personal data, subject to legal obligations.</li>
        <li>Withdraw consent to data processing where applicable.</li>
      </ul>

      <h3>6. Cookies</h3>
      <p>
        Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device to collect standard internet log information and visitor behavior. You can manage your cookie preferences through your browser settings.
      </p>

      <h2>7. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated revision date.
      </p>

      <h3>8. Contact Us</h3>
      <p>
        If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
      </p>
      <p>Email: <a href="mailto:info@wowclean.com">info@wowclean.com</a></p>
      <p>Phone: +1 555-555-5555</p>
      <p>Address: 123 Clean Street, Sanitation City, SC 12345</p>
    </div>
    </div>
  );
};

export default PrivacyPolicy;