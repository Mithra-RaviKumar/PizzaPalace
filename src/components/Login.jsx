import React, { useRef } from 'react';

const Login = () => {
  const idRef = useRef();

  const handleLogin = () => {
    const enteredID = idRef.current.value;
    if (enteredID.startsWith('AD-')) {
      alert("Welcome Administrator!");
    } else if (enteredID.startsWith('US-')) {
      alert("Welcome Customer!");
    } else {
      alert("Invalid ID format.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      <input ref={idRef} type="text" placeholder="Enter your ID" style={{ padding: '10px', borderRadius: '10px' }} />
      <br /><br />
      <button onClick={handleLogin} style={{ padding: '10px 20px', borderRadius: '20px' }}>Login</button>
    </div>
  );
};

export default Login;
