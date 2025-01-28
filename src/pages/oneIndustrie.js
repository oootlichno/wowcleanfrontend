import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import QuoteForm from "../components/quote";
import backendURL from "../components/config";

const OneIndustriePage = () => {
  const { id } = useParams();
  const [industry, setIndustry] = useState(null); 
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIndustry = async () => {
      try {
        const response = await axios.get(`${backendURL}/api/industries/${id}`);
        setIndustry(response.data);
      } catch (error) {
        console.error("Error fetching industry:", error);
      }
    };

    fetchIndustry();
  }, [id]);

  if (!industry) return <div>Załadunek...</div>;

  return (
    <div className="one-service-page">
      <div className="breadcrumb">Branże - {industry.name}</div>

      <button className="back-button" onClick={() => navigate(-1)}>
        ← Powrót
      </button>

      <div className="service-header">
        <div className="service-image">
          <img src={industry.image_url} alt={industry.name} />
        </div>
        <div className="service-text">
          <h1>{industry.name}</h1>
          <p>{industry.description}</p>
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
        <div id="quote-section">
          <QuoteForm />
        </div>
      )}
    </div>
  );
};


export default OneIndustriePage;

