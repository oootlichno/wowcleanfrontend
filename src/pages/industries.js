import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import backendURL from "../components/config";


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
      <h1>Industries we work with</h1>
      <div className="services-grid">
        {industries.map((industrie) => (
          <div className="servicepage-card" key={industrie.id}>
            <img src={industrie.image_url} alt={industrie.name} />
            <h2>{industrie.name}</h2>
            <p>{industrie.description}</p>
            <Link to={`/industries/${industrie.id}`} className="learn-more-btn">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;