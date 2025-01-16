import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../admin/Adminaccount.css';

const MessagesAdmin = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  // Fetch messages from the backend
  const fetchMessages = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/messages`);
      setMessages(response.data);
    } catch (err) {
      setError('Failed to load messages.');
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="admin-messages">
      <h1>Messages</h1>
      {error && <p className="error-message">{error}</p>}
      <table className="articles-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Sender Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Sent At</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <td>{message.id}</td>
              <td>{message.sender_name}</td>
              <td>{message.email}</td>
              <td>{message.phone}</td>
              <td>{message.message}</td>
              <td>
                {new Date(message.sent_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                }).replace(/\//g, '.')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MessagesAdmin;
