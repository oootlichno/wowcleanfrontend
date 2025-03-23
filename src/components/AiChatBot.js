import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import backendURL from "./config"; 
import ai_assistant from "../img/AI_assistant.webp";

const API_URL = `${backendURL}/api/aichatbot`;

function AiChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null); 

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { sender: "user", text: input }]);
    const currentInput = input;
    setInput("");

    try {
      const response = await axios.post(
        API_URL,
        { message: currentInput },
        { withCredentials: true }
      );
      setMessages(prev => [...prev, { sender: "ai", text: response.data.message }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { sender: "ai", text: "Error communicating with AI" }]);
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();  
  }, [messages]);

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
      <div className="chat-header">
        <img src={ai_assistant} alt="Anna" className="header-avatar" />
        Anna — Asystent AI
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.sender === 'ai' && (
              <img
                src={ai_assistant}
                alt="Assistant"
                className="assistant-avatar"
              />
            )}
            <div className="message-text">{msg.text}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />  
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Wpisz wiadomość..."
        />
        <button onClick={sendMessage}>Wyślij</button>
      </div>
    </div>
  );
}

export default AiChatBot;

