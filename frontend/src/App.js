import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import Homepage from './pages/homepage';
import Sell from './pages/sell';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Define the onLogin function to update authentication state
  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <Router>
      <div>
        <Routes>
          {/* Public routes */}
          <Route path="/register" element={<Register onLogin={handleLogin} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          
          {/* Protected route */}
          <Route 
            path="/homepage" 
            element={isAuthenticated ? <Homepage /> : <Navigate to="/login" replace />} 
          />

          <Route 
            path="/sell" 
            element={isAuthenticated ? <Sell /> : <Navigate to="/login" replace />} 
          />

          {/* Redirect to homepage if authenticated, otherwise to login */}
          <Route 
            path="/" 
            element={isAuthenticated ? <Navigate to="/homepage" replace /> : <Navigate to="/login" replace />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
