import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import QuoteForm from "../components/quote";
import backendURL from "../components/config";


const OneIndustriePage = () => {
  const { id } = useParams();
  const [industries, setIndustries] = useState(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);


  useEffect(() => {
    const fetchIndustries = async () => {
      const response = await axios.get(`${backendURL}/api/industries/${id}`);
      setIndustries(response.data);
    };
    fetchIndustries();
  }, [id]);

  if (!industries) return <div>Loading...</div>;

  return (
    <div className="one-service-page">
      <div className="service-header">
        <div className="service-text">
          <h1>{industries.name}</h1>
          <p>{industries.description}</p>
          <button onClick={() => setShowQuoteForm(!showQuoteForm)} className="quote-btn">
            Get a Quote
          </button>
        </div>
        <div className="service-image">
          <img src={industries.image_url} alt={industries.name} />
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

export default OneIndustriePage;

