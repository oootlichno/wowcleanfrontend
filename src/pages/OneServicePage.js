import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import QuoteForm from "../components/quote";
import backendURL from "../components/config";

const OneServicePage = () => {
  const { id } = useParams(); // Correctly extract `id` from URL params
  const [service, setService] = useState(null); // Manage the service state
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const navigate = useNavigate();

  // Fetch service details by ID
  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(`${backendURL}/api/services/${id}`);
        setService(response.data);
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };
    fetchService();
  }, [id]);

  // Show a loading state if the service is not yet loaded
  if (!service) return <div>Loading...</div>;

  return (
    <div className="one-service-page">
       <div className="breadcrumb">
        Our Services - {service.name}
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="service-header">
        <div className="service-text">
          <h1>{service.name}</h1>
          <p>{service.description}</p>
          <div className="banner-button">
          <button
            onClick={() => setShowQuoteForm(!showQuoteForm)}
            className="quote-button"
          >
            Get a Quote
          </button>
        </div>
        </div>
        <div className="service-image">
          <img src={service.image} alt={service.name} />
        </div>
      </div>
      {showQuoteForm && (
        <div id="quote-section">
          <QuoteForm />
        </div>
      )}
    </div>
  );
};

export default OneServicePage;

