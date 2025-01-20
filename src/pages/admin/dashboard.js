import React from 'react';
import { useNavigate, Link, Outlet, useLocation } from 'react-router-dom';
import '../admin/Adminaccount.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('adminToken'); 
    navigate('/admin'); 
  };

  const actions = [
    { label: 'Add an Article', route: '/admin/dashboard/articles' },
    { label: 'Check New Messages', route: '/admin/dashboard/messages' },
    { label: 'Check New Quotes', route: '/admin/dashboard/quotes' },
    { label: 'Edit Industries', route: '/admin/dashboard/industries' },
    { label: 'Edit Services', route: '/admin/dashboard/services' },
  ];

  const isDashboardPage = location.pathname === '/admin/dashboard';

  return (
    <div className="admin-dashboard-container">
      {/* Left-Side Menu */}
      <aside className="admin-menu">
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
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
        {isDashboardPage && (
          <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="dashboard-buttons">
              {actions.map((action, index) => (
                <button
                  key={index}
                  className="dashboard-button"
                  onClick={() => navigate(action.route)}
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        )}
        <Outlet /> 
      </main>
    </div>
  );
};

export default AdminDashboard;