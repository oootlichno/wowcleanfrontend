import React, { useState } from "react";
import axios from "axios";
import backendURL from "./config"; 

const API_URL = `${backendURL}/api/aichatbot`;

function AiChatBot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
  
    const sendMessage = async () => {
      if (!input.trim()) return;
  
      const newMessages = [...messages, { sender: "user", text: input }];
      setMessages(newMessages);
      setInput("");
  
      try {
        const response = await axios.post(API_URL, { message: input });
        setMessages([...newMessages, { sender: "ai", text: response.data.message }]);
      } catch (error) {
        setMessages([...newMessages, { sender: "ai", text: "Error communicating with AI" }]);
      }
    };
  
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
  

