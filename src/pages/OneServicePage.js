import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import QuoteForm from "../components/quote";
import backendURL from "../components/config";


const OneServicePage = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  useEffect(() => {
    const fetchService = async () => {
      const response = await axios.get(`${backendURL}/api/services/${id}`);
      setService(response.data);
    };
    fetchService();
  }, [id]);

  if (!service) return <div>Loading...</div>;

  return (
    <div className="one-service-page">
      <div className="service-header">
        <div className="service-text">
          <h1>{service.name}</h1>
          <p>{service.description}</p>
          <button onClick={() => setShowQuoteForm(!showQuoteForm)} className="quote-btn">
            Get a Quote
          </button>
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

