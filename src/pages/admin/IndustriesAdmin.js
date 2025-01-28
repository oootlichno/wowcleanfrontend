import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../admin/Adminaccount.css';

const IndustriesAdmin = () => {
  const [industries, setIndustries] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchIndustries = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/industries`);
      setIndustries(response.data);
    } catch (err) {
      setError("Failed to load industries.");
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/dashboard/industries/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this industry?")) {
      try {
        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/industries/${id}`);
        setIndustries(industries.filter((industry) => industry.id !== id));
      } catch (err) {
        setError("Failed to delete the industry.");
      }
    }
  };

  const handleAddIndustry = () => {
    navigate('/admin/dashboard/industries/add');
  };

  useEffect(() => {
    fetchIndustries();
  }, []);

  return (
    <div className="admin-industries">
      <h1>Industries</h1>
      {error && <p className="error-message">{error}</p>}
      <table className="articles-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>About</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {industries.map((industry) => (
            <tr key={industry.id}>
              <td>{industry.id}</td>
              <td>{industry.name}</td>
              <td>
                <img
                  src={industry.image_url}
                  alt={industry.name}
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
              </td>
              <td>{industry.short_description}</td>
              <td>{industry.description}</td>
              <td>
              <div className='edit-delete-buttons'>
                <button onClick={() => handleEdit(industry.id)} className="edit-button">
                  Edit
                </button>
                <button onClick={() => handleDelete(industry.id)} className="delete-button">
                  Delete
                </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddIndustry} className="add-article-button">
        Add an Industry
      </button>
    </div>
  );
};

export default IndustriesAdmin;