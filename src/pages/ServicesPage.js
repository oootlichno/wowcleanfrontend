import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import backendURL from "../components/config";
import shape from "../img/Shape.png";

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
      <div class="shape-container">
        <img src={shape} alt="Background Shape" className="shape-image" />
      </div>
      <div className="services-title-page">Nasze usługi</div>
      <div className="services-grid">
        {services.map((service) => (
          <div className="servicepage-card" key={service.id}>
            <img
              src={service.image}
              alt={service.name}
              className="service-icon"
            />
            <div className="services-text-page">
              <h3>{service.name}</h3>
              <p className="service-description">{service.short_description}</p>
              <div className="learn-more-btn">
                <Link to={`/services/${service.id}`}>Dowiedz się więcej</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
