import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../admin/Adminaccount.css';

const ServicesAdmin = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/services`);
      setServices(response.data);
    } catch (err) {
      setError("Failed to load services.");
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/dashboard/services/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/services/${id}`);
        setServices(services.filter((service) => service.id !== id));
      } catch (err) {
        setError("Failed to delete the service.");
      }
    }
  };

  const handleAddService = () => {
    navigate('/admin/dashboard/services/add');
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="admin-articles">
      <h1>Services</h1>
      {error && <p className="error-message">{error}</p>}
      <table className="articles-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>About</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.name}</td>
              <td>
                <img
                  src={service.image}
                  alt={service.name}
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
              </td>
              <td>{service.description}</td>
              <td>{service.short_description}</td>
              <td>
                <button onClick={() => handleEdit(service.id)} className="edit-button">
                  Edit
                </button>
                <button onClick={() => handleDelete(service.id)} className="delete-button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddService} className="add-article-button">
        Add a Service
      </button>
    </div>
  );
};

export default ServicesAdmin;


