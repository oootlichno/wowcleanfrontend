import React from "react";
import logo from "../img/FullLogo_Transparent_wowclean_c.png";
import { Link } from "react-router-dom";
import Contact from "../components/phonecall";
import Email from "../components/emailwrite";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="Footer">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-column footer-logo">
          <Link to="/">
            <img src={logo} alt="WOWClean Logo" />
          </Link>
        </div>

        {/* Navigation */}
        <div className="footer-column footer-nav">
          <ul>
            <li>
              <Link to="/aboutus">O nas</Link>
            </li>
            <li>
              <Link to="/services">Usługi</Link>
            </li>
            <li>
              <Link to="/industries">Branże</Link>
            </li>
            <li>
              <Link to="/products">Produkty</Link>
            </li>
            <li>
              <Link to="/articles">Artykuły</Link>
            </li>
            <li>
              <Link to="/contacts">Kontakt</Link>
            </li>
          </ul>
          <div className="contact-container">
            <Contact phone="+48 (734) 126-837" />
            <Email email="help@wowclean.pl" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="Policy">
          <p>
            &copy; {currentYear} WOWClean by CPG. Wszelkie prawa zastrzeżone. Kliknij na {" "}
            <Link to="/privacy-policy" style={{ color: "#fff" }}>
            Polityka prywatności
            </Link>{" "}
            aby przeczytać więcej.
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
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
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
  );
};

export default Footer;
