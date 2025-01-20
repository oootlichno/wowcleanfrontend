import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../admin/Adminaccount.css';

const QuotesAdmin = () => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState('');

  const fetchQuotes = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/quotes`);
      setQuotes(response.data);
    } catch (err) {
      setError('Failed to load quotes.');
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this quote?")) {
      try {
        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/quotes/${id}`);
        setQuotes(quotes.filter((quote) => quote.id !== id));
      } catch (err) {
        setError("Failed to delete a quote.");
      }
    }
  };

  return (
    <div className="admin-messages">
      <h1>Quotes</h1>
      {error && <p className="error-message">{error}</p>}
      <table className="articles-table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Contact Person</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Cleaning Frequency</th>
            <th>WC</th>
            <th>Toilet</th>
            <th>Frequency</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote) => (
            <tr key={quote.id}>
              <td>{quote.company_name}</td>
              <td>{quote.contact_person}</td>
              <td>{quote.email}</td>
              <td>{quote.phone}</td>
              <td>{quote.cleaning_frequency}</td>
              <td>{quote.wc}</td>
              <td>{quote.toilet}</td>
              <td>{quote.cleaning_frequency}</td>
              <td>
                <div className='edit-delete-buttons'>
                <button onClick={() => handleDelete(quote.id)} className="delete-button">
                  Delete
                </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuotesAdmin;
