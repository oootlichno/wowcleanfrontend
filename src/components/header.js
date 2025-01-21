import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../img/FullLogo_Transparent_wowclean_c.png";
import backendURL from "../components/config";
import Contact from "../components/phonecall";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${backendURL}/api/services`);
        setServices(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    const fetchIndustries = async () => {
      try {
        const response = await axios.get(`${backendURL}/api/industries`);
        setIndustries(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching industries:", error);
      }
    };

    fetchServices();
    fetchIndustries();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="WoWClean Logo" />
          </Link>
        </div>

        <div
          className="hamburger-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>

        {menuOpen && (
          <>
            <div
              className="menu-overlay"
              onClick={() => setMenuOpen(false)}
            ></div>
            <nav className="nav mobile-nav">
              <Link
                to="/aboutus"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/industries"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Industries
              </Link>
              <Link
                to="/products"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/articles"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Articles
              </Link>
              <Link
                to="/contacts"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Contacts
              </Link>
            </nav>
          </>
        )}

        <div className="desktop-nav">
          <Link to="/aboutus" className="nav-link">
            About Us
          </Link>
          <div className="dropdown">
            <Link to="/services" className="nav-link">
              Services
            </Link>
            <div className="dropdown-menu">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="dropdown-item"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="dropdown">
            <Link to="/industries" className="nav-link">
              Industries
            </Link>
            <div className="dropdown-menu">
              {industries.map((industry) => (
                <Link
                  key={industry.id}
                  to={`/industries/${industry.id}`}
                  className="dropdown-item"
                >
                  {industry.name}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/products" className="nav-link">
            Products
          </Link>
          <Link to="/articles" className="nav-link">
            Articles
          </Link>
          <Link to="/contacts" className="nav-link">
            Contacts
          </Link>
        </div>

        <div className="contact-container-header">
          <Contact phone="+48 (734) 126-837" />
        </div>
      </div>
    </>
  );
};

export default Header;

  
