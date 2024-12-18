import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../img/logo_wow.png";
import backendURL from "../components/config";

const Header = () => {
  const [services, setServices] = useState([]);
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${backendURL}/api/services`);
        console.log("Services API Response:", response.data);
        setServices(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices([]); // Fallback to empty array
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const response = await axios.get(`${backendURL}/api/industries`);
        console.log("Industries API Response:", response.data);
        setIndustries(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching industries:", error);
        setIndustries([]); // Fallback to empty array
      }
    };
    fetchIndustries();
  }, []);

  return (
    <>
      {/* Grey stripe under header */}
      <div className="header-phone-bar">
        <p className="phone-number">📞 +1 555-555-5555</p>
      </div>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="nav">
          <Link to="/aboutus" className="nav-link">About Us</Link>
          <div className="dropdown">
            <Link to="/services" className="nav-link">Services</Link>
            <div className="dropdown-menu">
              {Array.isArray(services) && services.map((service) => (
                <Link key={service.id} to={`/services/${service.id}`} className="dropdown-item">
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="dropdown">
            <Link to="/industries" className="nav-link">Industries</Link>
            <div className="dropdown-menu">
              {Array.isArray(industries) && industries.map((industrie) => (
                <Link key={industrie.id} to={`/industries/${industrie.id}`} className="dropdown-item">
                  {industrie.name}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/articles" className="nav-link">Articles</Link>
          <Link to="/contacts" className="nav-link">Contacts</Link>
        </div>
      </div>
    </>
  );
};

export default Header;