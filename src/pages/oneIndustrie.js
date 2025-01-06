/* import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import QuoteForm from "../components/quote";
import backendURL from "../components/config";


const OneIndustriePage = () => {
  const { id } = useParams();
  const [industries, setIndustries] = useState(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIndustries = async () => {
      const response = await axios.get(`${backendURL}/api/industries/${id}`);
      setIndustries(response.data);
    } catch (error) {
      console.error("Error fetching industries:", error);
    }
  };
    fetchIndustries();
  }, [id]);

  if (!industries) return <div>Loading...</div>;

  return (
    <div className="one-service-page">
    <div className="breadcrumb">
     Industries - {industries.name}
   </div>
   <button className="back-button" onClick={() => navigate(-1)}>
     ← Back
   </button>
      <div className="service-header">
        <div className="service-text">
          <h1>{industries.name}</h1>
          <p>{industries.description}</p>
          <div className="banner-button"></div>
          <button onClick={() => setShowQuoteForm(!showQuoteForm)} className="quote-btn">
            Get a Quote
          </button>
        </div>
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

export default OneIndustriePage; */


import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import QuoteForm from "../components/quote";
import backendURL from "../components/config";

const OneIndustriePage = () => {
  const { id } = useParams();
  const [industry, setIndustry] = useState(null); // Changed `industries` to `industry` for consistency
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

  if (!industry) return <div>Loading...</div>;

  return (
    <div className="one-service-page">
      <div className="breadcrumb">
        Industries - {industry.name}
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="service-header">
        <div className="service-text">
          <h1>{industry.name}</h1>
          <p>{industry.description}</p>
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
          <img src={industry.image_url} alt={industry.name} />
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

