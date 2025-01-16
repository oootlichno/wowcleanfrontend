import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../admin/Adminaccount.css';

const AddServiceAdmin = () => {
  const navigate = useNavigate();
  const [service, setService] = useState({ name: '', image: '', description: '', price: '' });
  const [error, setError] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/services`, service);
      alert('Service added successfully!');
      navigate('/admin/dashboard/services');
    } catch (err) {
      setError('Failed to add the service.');
    }
  };

  return (
    <div className="add-article-container">
      <h1>Add New Service</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleAdd} className="add-article-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={service.name}
            onChange={(e) => setService({ ...service, name: e.target.value })}
            placeholder="Enter the service name"
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            value={service.image}
            onChange={(e) => setService({ ...service, image: e.target.value })}
            placeholder="Enter the image URL"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={service.description}
            onChange={(e) => setService({ ...service, description: e.target.value })}
            placeholder="Enter the service description"
            rows="5"
          />
        </div>
        <div className="form-group">
          <label>Price ($):</label>
          <input
            type="number"
            step="0.01"
            value={service.price}
            onChange={(e) => setService({ ...service, price: e.target.value })}
          />
        </div>
        <button type="submit" className="add-button">Add Service</button>
      </form>
    </div>
  );
};

export default AddServiceAdmin;
