import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../admin/Adminaccount.css';

const SingleIndustryAdmin = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [industry, setIndustry] = useState({ name: '', image_url: '', description: '' });
  const [error, setError] = useState('');

  const fetchIndustry = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/industries/${id}`);
      setIndustry(response.data);
    } catch (err) {
      setError('Failed to fetch the industry.');
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/industries/${id}`, industry);
      alert('Industry updated successfully!');
      navigate('/admin/dashboard/industries');
    } catch (err) {
      setError('Failed to update the industry.');
    }
  };

  useEffect(() => {
    fetchIndustry();
  }, []);

  return (
    <div className="single-industry-admin">
      <h1>Edit Industry</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleUpdate}>
        <label>Name:</label>
        <input
          type="text"
          value={industry.name}
          onChange={(e) => setIndustry({ ...industry, name: e.target.value })}
        />

        <label>Image URL:</label>
        <input
          type="text"
          value={industry.image_url}
          onChange={(e) => setIndustry({ ...industry, image_url: e.target.value })}
        />

        <label>Description:</label>
        <textarea
          value={industry.description}
          onChange={(e) => setIndustry({ ...industry, description: e.target.value })}
          rows="5"
        />

        <button type="submit" className="save-button">Save Changes</button>
      </form>
    </div>
  );
};

export default SingleIndustryAdmin;