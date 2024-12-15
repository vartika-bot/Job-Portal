// src/components/ProtectedRoute.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/'); 
    }
  }, [navigate]);

  return children;
}

export default ProtectedRoute;