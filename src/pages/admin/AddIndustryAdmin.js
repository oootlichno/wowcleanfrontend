import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../admin/Adminaccount.css';

const AddIndustryAdmin = () => {
  const navigate = useNavigate();
  const [industry, setIndustry] = useState({ name: '', image_url: '', description: '', short_description: '' });
  const [error, setError] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/industries`, industry);
      alert('Industry added successfully!');
      navigate('/admin/dashboard/industries');
    } catch (err) {
      setError('Failed to add the industry.');
    }
  };

  return (
    <div className="add-article-container">
      <h1>Add New Industry</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleAdd} className="add-article-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={industry.name}
            onChange={(e) => setIndustry({ ...industry, name: e.target.value })}
            placeholder="Enter the industry name"
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            value={industry.image_url}
            onChange={(e) => setIndustry({ ...industry, image_url: e.target.value })}
            placeholder="Enter the image URL"
          />
        </div>
        <div className="form-group">
          <label>About:</label>
          <textarea
            value={industry.short_description}
            onChange={(e) => setIndustry({ ...industry, short_description: e.target.value })}
            placeholder="Enter the industry description"
            rows="3"
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={industry.description}
            onChange={(e) => setIndustry({ ...industry, description: e.target.value })}
            placeholder="Enter the industry description"
            rows="5"
          />
        </div>

        <button type="submit" className="add-button">Add Industry</button>
      </form>
    </div>
  );
};

export default AddIndustryAdmin;