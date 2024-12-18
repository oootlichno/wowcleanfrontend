import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import backendURL from "../components/config";


const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await axios.get(`${backendURL}/api/services`);
      setServices(response.data);
    };
    fetchServices();
  }, []);

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div className="servicepage-card" key={service.id}>
            <img src={service.image} alt={service.name} />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <Link to={`/services/${service.id}`} className="learn-more-btn">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;