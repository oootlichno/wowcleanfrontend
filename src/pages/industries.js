import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import backendURL from "../components/config";
import shape from "../img/Shape.png";

const Industries = () => {
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    const fetchIndustries = async () => {
      const response = await axios.get(`${backendURL}/api/industries`);
      setIndustries(response.data);
    };
    fetchIndustries();
  }, []);

  
  
  return (
    <div className="services-page">
      <div class="shape-container">
        <img src={shape} alt="Background Shape" className="shape-image" />
      </div>
      <div className="services-title-page">Branże, z którymi współpracujemy</div>
      <div className="services-grid">
        {industries.map((industrie) => (
          <div className="servicepage-card" key={industrie.id}>
            <img
              src={industrie.image_url}
              alt={industrie.name}
              className="service-icon"
            />
            <div className="services-text-page">
            <h3>{industrie.name}</h3>
            <p className="service-description">{industrie.short_description}</p>
            <div className="learn-more-btn">
              <Link to={`/industries/${industrie.id}`}>Dowiedz się więcej</Link>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
