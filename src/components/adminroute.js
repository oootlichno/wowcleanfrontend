import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedAdminRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken'); // Check if the admin token exists

  if (!token) {
    return <Navigate to="/admin" />;
  }

  return children;
};

export default ProtectedAdminRoute;