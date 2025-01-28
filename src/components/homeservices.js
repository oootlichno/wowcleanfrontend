import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backendURL from "../components/config";

const Homeservices = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${backendURL}/api/services`);
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  const handleServiceClick = (id) => {
    navigate(`/services/${id}`);
  };

  return (
    <div className="home-services">
      <div className="services-title-container">
        <h2 className="services-title">Nasze usługi</h2>
        <div className="services-title-line"></div>
      </div>
      <div className="services-container">
        {services.map((service) => (
          <div
            className="service-card"
            key={service.id}
            onClick={() => handleServiceClick(service.id)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={service.image}
              alt={service.name}
              className="service-icon"
            />
            <div className="service-card-text-container">
              <h3>{service.name}</h3>
              <p className="service-description">
                {service.short_description}
                <span className="readmore"> Przeczytaj więcej →</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homeservices;
