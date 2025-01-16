import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../admin/Adminaccount.css';

const QuotesAdmin = () => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState('');

  // Fetch quotes from the backend
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

  return (
    <div className="admin-quotes">
      <h1>Quotes</h1>
      {error && <p className="error-message">{error}</p>}
      <table className="quotes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Company Name</th>
            <th>Contact Person</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Cleaning Frequency</th>
            <th>WC</th>
            <th>Toilet</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote) => (
            <tr key={quote.id}>
              <td>{quote.id}</td>
              <td>{quote.company_name}</td>
              <td>{quote.contact_person}</td>
              <td>{quote.email}</td>
              <td>{quote.phone}</td>
              <td>{quote.cleaning_frequency}</td>
              <td>{quote.wc}</td>
              <td>{quote.toilet}</td>
              <td>{quote.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuotesAdmin;
