import React, { useState } from 'react';
import './CustomerLogin.css';
import { useNavigate } from 'react-router-dom';

const CustomerLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    
    if (username && password) {
      alert('Login successful!');
     
    } else {
      alert('Please enter both username and password.');
    }
  };

  const handleSignup = () => {
    navigate('/signup'); 
  };

  return (
    <div className="customer-login-container">
      <div className="customer-login-box">
        <h2>Customer Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="login-btn" onClick={handleLogin}>Login</button>
        <button className="signup-btn" onClick={handleSignup}>Sign Up</button>
        <button className="back-btn" onClick={() => navigate('/lo')}>Back</button>
      </div>
    </div>
  );
};

export default CustomerLogin;
