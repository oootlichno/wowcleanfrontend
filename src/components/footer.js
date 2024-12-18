import React from "react";
import logo from "../img/wow_clean_logo_whitewords.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="Footer">
      <div className="footer-content">
        {/* Column 1: Logo  */}

        <div className="footer-column">
          <div className="footer-logo">
            <Link to="/">
              <img src={logo} alt="WOWClean Logo" />
            </Link>
          </div>
        </div>
        {/* Column 2: Nav */}

        <div className="footer-column">
          <div className="nav">
            <nav className="footer-nav">
              <ul>
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/industries">Industries</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/articles">Articles</Link>
                </li>
                <li>
                  <Link to="/contacts">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* Column 3: Address, Phone, Email and socials */}
        <div className="footer-column">
          <div className="footer-contact">
            <p>
              <i className="fas fa-map-marker-alt"></i> 6323 Virginia Fields
              Drive, Katy, TX, 77494
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> +1 555-555-5555
            </p>
            <p>
              <i className="fas fa-envelope"></i> support@wowclean.com
            </p>
          </div>
          <div className="footer-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; WOWClean {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
