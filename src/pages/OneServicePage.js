import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import QuoteForm from "../components/quote";
import backendURL from "../components/config";

const OneServicePage = () => {
  const { id } = useParams(); 
  const [service, setService] = useState(null); 
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const navigate = useNavigate();

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

  if (!service) return <div>Loading...</div>;


return (
  <div className="one-service-page">
    <div className="breadcrumb">
    Usługi - {service.name}
    </div>
    <button className="back-button" onClick={() => navigate(-1)}>
    ← Powrót
    </button>
    <div className="service-header">
      <div className="service-image">
        <img src={service.image} alt={service.name} />
      </div>
      <div className="service-text">
        <h1>{service.name}</h1>
        <p>{service.description}</p>
        <div className="banner-button">
          <button
            onClick={() => setShowQuoteForm(!showQuoteForm)}
            className="quote-button"
          >
            Uzyskaj wycenę
          </button>
        </div>
      </div>
    </div>
    {showQuoteForm && (
      <div id="quote-section" className="quote-section">
        <QuoteForm />
      </div>
    )}
  </div>

);
    };

export default OneServicePage;

