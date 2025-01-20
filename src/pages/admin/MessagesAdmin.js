import React, { useState, useEffect } from "react";
import axios from "axios";
import "../admin/Adminaccount.css";

const MessagesAdmin = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/messages`
      );
      setMessages(response.data);
    } catch (err) {
      setError("Failed to load messages.");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await axios.delete(
          `${process.env.REACT_APP_BACKEND_URL}/api/messages/${id}`
        );
        setMessages(messages.filter((message) => message.id !== id));
      } catch (err) {
        setError("Failed to delete a message.");
      }
    }
  };

  return (
    <div className="admin-messages">
      <h1>Messages</h1>
      {error && <p className="error-message">{error}</p>}
      <table className="articles-table">
        <thead>
          <tr>
            <th>Sender Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Sent At</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <td>
                {message.first_name} {message.last_name}
              </td>
              <td>{message.email}</td>
              <td>{message.phone}</td>
              <td>{message.message}</td>
              <td>
                {new Date(message.created_at)
                  .toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                  .replace(/\//g, ".")}
              </td>
              <td>
                <div className="edit-delete-buttons">
                  <button
                    onClick={() => handleDelete(message.id)}
                    className="delete-button"
                  >
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

export default MessagesAdmin;
