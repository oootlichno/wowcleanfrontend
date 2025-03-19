import React, { useState, useEffect } from "react";
import axios from "axios";
import backendURL from "./config"; 

const API_URL = `${backendURL}/api/aichatbot`;

function AiChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to the conversation
    setMessages(prev => [...prev, { sender: "user", text: input }]);
    const currentInput = input;
    setInput("");

    try {
      // Send user message to backend with credentials (cookies) enabled
      const response = await axios.post(
        API_URL,
        { message: currentInput },
        { withCredentials: true } // <-- this line ensures the browser sends the session cookie
      );

      // Add AI response to the conversation using the freshest state
      setMessages(prev => [...prev, { sender: "ai", text: response.data.message }]);
    } catch (error) {
      setMessages(prev => [...prev, { sender: "ai", text: "Error communicating with AI" }]);
    }
  };

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get(`${API_URL}/history`, { withCredentials: true });
        setMessages(res.data.history || []);
      } catch (err) {
        console.error("Error fetching chat history", err);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="chatbot-container">
      <div className="chat-header">AI Chatbot</div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default AiChatBot;
  
