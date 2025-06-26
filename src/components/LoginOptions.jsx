import React from 'react';
import { Link } from 'react-router-dom';
import './LoginOptions.css';

const LoginOptions = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login As</h2>
        <div className="button-group">
          <Link to="/alo" className="btn-style">Admin</Link>
          <Link to="/clo" className="btn-style">Customer</Link>
        </div>
        <Link to="/" className="back-button">Back to Home</Link>
      </div>
    </div>
  );
};

export default LoginOptions;
