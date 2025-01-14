import React from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import '../admin/Adminaccount.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken'); 
    navigate('/admin'); 
  };

  return (
    <div className="admin-dashboard-container">
      {/* Left-Side Menu */}
      <aside className="admin-menu">
        <h2>Admin Menu</h2>
        <ul>
          <li><Link to="/admin/dashboard/articles">Articles</Link></li>
          <li><Link to="/admin/dashboard/industries">Industries</Link></li>
          <li><Link to="/admin/dashboard/services">Services</Link></li>
          <li><Link to="/admin/dashboard/quotes">Quotes</Link></li>
          <li><Link to="/admin/dashboard/messages">Messages</Link></li>
        </ul>
        <button onClick={handleLogout} className="logout-button">Log out</button>
      </aside>

      {/* Main Content Area */}
      <main className="admin-content">
        <Outlet /> {/* Dynamic content will render here */}
      </main>
    </div>
  );
};

export default AdminDashboard;