import React, { useState } from "react";
import axios from "axios";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/admin/login`, 
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );
      const token = response.data.token;
      localStorage.setItem("adminToken", token); 
      window.location.href = "/admin/dashboard"; 
    } catch (err) {
      setError("Invalid username or password");
    }
  };

/*   return (
    <div>
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  ); */
  return (
    <div className="login-page">
      <header className="header">
        {/* Your Header Component */}
      </header>
      <main className="login-container">
        <div className="login-form">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            {error && <p className="error-message">{error}</p>}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </main>
      <footer className="footer">
        {/* Your Footer Component */}
      </footer>
    </div>
  );
};

export default AdminLogin;