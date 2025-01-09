import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../img/FullLogo_Transparent_wowclean_c.png";
import backendURL from "../components/config";
import Contact from "../components/phonecall";

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
        setServices([]); 
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
        setIndustries([]); 
      }
    };
    fetchIndustries();
  }, []);

  return (
    <>
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
              {Array.isArray(industries) && industries.map((industry) => (
                <Link key={industry.id} to={`/industries/${industry.id}`} className="dropdown-item">
                  {industry.name}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/articles" className="nav-link">Articles</Link>
          <Link to="/contacts" className="nav-link">Contacts</Link>
          <Contact phone="555-555-5555" />
        </div>
      </div>
    </>
  );
};

export default Header;