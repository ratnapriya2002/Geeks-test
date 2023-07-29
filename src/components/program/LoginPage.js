import React, { useState } from 'react';
import './index.css'; // Import the external CSS file
import {Link}from "react-router-dom"
const Login = () => {
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

 
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Get the previously registered user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.email === loginData.email && userData.password === loginData.password) {
      // Login successful, move to the next screen (e.g., dashboard)
      console.log('Login successful');
      // Implement the logic to navigate to the next screen here (e.g., using React Router)
    } else {
      // Login failed, show "Invalid Credentials" message
      console.log('Invalid Credentials');
      // You can show an error message to the user using state or any UI component
    }
    // Clear the login form data
    setLoginData({ email: '', password: '' });
  };

  return (
    <div className="container"> {/* Add container class */}
      <div className="form-container"> {/* Add form-container class */}
        <h2>User Login</h2>
        <form onSubmit={handleLoginSubmit}>
          {/* Login form fields */}
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>
          <Link to="/moviedata">
          <button type="submit">Login</button>
          
          </Link>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
