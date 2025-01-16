import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../admin/Adminaccount.css';

const SingleServiceAdmin = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState({ name: '', image: '', description: '', price: '' });
  const [error, setError] = useState('');

  const fetchService = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/services/${id}`);
      setService(response.data);
    } catch (err) {
      setError('Failed to fetch the service.');
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/services/${id}`, service);
      alert('Service updated successfully!');
      navigate('/admin/dashboard/services');
    } catch (err) {
      setError('Failed to update the service.');
    }
  };

  useEffect(() => {
    fetchService();
  }, []);

  return (
    <div className="single-article-admin">
      <h1>Edit Service</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleUpdate}>
        <label>Name:</label>
        <input
          type="text"
          value={service.name}
          onChange={(e) => setService({ ...service, name: e.target.value })}
        />

        <label>Image URL:</label>
        <input
          type="text"
          value={service.image}
          onChange={(e) => setService({ ...service, image: e.target.value })}
        />

        <label>Description:</label>
        <textarea
          value={service.description}
          onChange={(e) => setService({ ...service, description: e.target.value })}
          rows="5"
        />

        <label>Price ($):</label>
        <input
          type="number"
          step="0.01"
          value={service.price}
          onChange={(e) => setService({ ...service, price: e.target.value })}
        />

        <button type="submit" className="save-button">Save Changes</button>
      </form>
    </div>
  );
};

export default SingleServiceAdmin;
