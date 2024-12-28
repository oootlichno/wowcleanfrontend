import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backendURL from "../components/config";



const QuoteForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company_name: "",
    contact_person: "",
    phone: "",
    email: "",
    street_address: "",
    city: "",
    state: "",
    zip: "",
    country: "PL",
    wc: 1,
    toilet: 1,
    cleaning_frequency: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${backendURL}/api/quotes`,
        formData
      );
  
      if (response.status === 201) {
        const emailData = {
          customerEmail: formData.email || process.env.REACT_APP_ADMIN_EMAIL, 
          adminEmail: process.env.REACT_APP_ADMIN_EMAIL || "oootlichno@gmail.com",
          orderDetails: {
            companyName: formData.company_name,
            contactPerson: formData.contact_person,
            phone: formData.phone,
            email: formData.email,
            streetAddress: formData.street_address,
            city: formData.city,
            state: formData.state || "",
            zip: formData.zip,
            country: formData.country,
            wc: formData.wc,
            toilet: formData.toilet,
            cleaningFrequency: formData.cleaning_frequency,
          },
        };
  
        console.log("Email data being sent:", emailData);
        console.log("Email:", formData.email);
        console.log("Admin Email:", process.env.REACT_APP_ADMIN_EMAIL);


  
        await axios.post(`${backendURL}/api/email`, emailData);
  
        alert("Quote submitted successfully!");
        navigate("/thank-you");
  
        setFormData({
          company_name: "",
          contact_person: "",
          phone: "",
          email: "",
          street_address: "",
          city: "",
          state: "",
          zip: "",
          country: "PL",
          wc: 0,
          toilet: 0,
          cleaning_frequency: 1,
        });
      }
    } catch (error) {
      console.error("Error submitting the quote or sending the email:", error.response || error.message);
      alert(
        "There was an error submitting the quote or sending the email. Please check the console for more details."
      );
    }
  };

  return (
    <div className="quote">
  <h2 id="quote-form-section" className="services-title">Request a Quote</h2>
  <div className="quote-form-container">
    <form onSubmit={handleSubmit} className="quote-form">

     {/* Row 1 */}
    <div className="form-row">
      <div className="form-column">
        <label htmlFor="company_name">Company Name</label>
        <input
          type="text"
          id="company_name"
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-column">
        <label htmlFor="contact_person">Contact Person *</label>
        <input
          type="text"
          id="contact_person"
          name="contact_person"
          value={formData.contact_person}
          onChange={handleChange}
        />
      </div>
      </div>

       {/* Row 2 */}

    <div className="form-row">
      <div className="form-column">
        <label htmlFor="phone">Phone *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-column">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
    </div>
      
    {/* Row 3 */}
    <div className="form-row">
    <div className="form-column">
          <label htmlFor="street_address">Street Address *</label>
          <input
            type="text"
            id="street_address"
            name="street_address"
            value={formData.street_address}
            onChange={handleChange}
            required
          />
        </div>
      
    </div>

        {/* Row 4 */}
      
      <div className="form-row">
        
        <div className="form-column">
          <label htmlFor="city">City *</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-column">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
      </div>

          {/* Row 4 */}
      <div className="form-row">
        <div className="form-column">
          <label htmlFor="zip">ZIP Code *</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-column">
          <label htmlFor="country">Country *</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

      </div>

       {/* Row 5 */}
      <div className="form-row">
       
        <div className="form-column">
          <label htmlFor="cleaning_frequency">
            Cleaning Sessions per Week *
          </label>
          <select
            id="cleaning_frequency"
            name="cleaning_frequency"
            value={formData.cleaning_frequency}
            onChange={handleChange}
            required
          >
            {[...Array(7)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i === 0 ? "time" : "times"}
              </option>
            ))}
          </select>
        </div>
        <div className="form-column">
          <label htmlFor="wc">WC Quantity *</label>
          <input
            type="number"
            id="wc"
            name="wc"
            value={formData.wc}
            onChange={(e) => {
              const value = Math.max(0, parseInt(e.target.value, 10));
              setFormData({ ...formData, wc: value });
            }}
            required
          />
        </div>
        <div className="form-column">
          <label htmlFor="toilet">Toilet Quantity *</label>
          <input
            type="number"
            id="toilet"
            name="toilet"
            value={formData.toilet}
            onChange={(e) => {
              const value = Math.max(0, parseInt(e.target.value, 10));
              setFormData({ ...formData, toilet: value });
            }}
            required
          />
        </div>
      </div>

      
      <div className="form-row">
        
      </div>
      <div className="quote-button-container">
  <button type="submit" className="quote-button-form">Submit</button>
</div>
    </form>
  </div>
</div>
    
  );
};

export default QuoteForm;
