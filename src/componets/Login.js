import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assests/Logo.png";
import axios from 'axios';
import {toastMessage} from '../utils/toast';

const Login = () => {
  const navigate = useNavigate();

  const [email, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // State to store validation errors

  // Simple email validation regex
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    let formErrors = {};
    
    // Email validation
    if (!email) {
      formErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      formErrors.email = "Please enter a valid email";
    }
    
    // Password validation
    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Perform validation before making the API call
    if (!validateForm()) return;

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
        email,
        password,
      });

      localStorage.setItem('token', response?.data?.data?.token); 
      localStorage.setItem('user', JSON.stringify(response?.data?.data?.user));

      if(response?.data?.code === 200){
        toastMessage(response?.data?.message, "success", "ASDFG");
        navigate('/admin/Dashbord');
      }

    } catch (error) {
      if (error?.response?.data?.code === 400)
        return toastMessage(error?.response?.data?.message, "error", "ASDFG");
      if (error?.response?.data?.code === 500){ 
        toastMessage(error?.response?.data?.message, "warning", "ASDFG");
      }
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="LoginArea">
      <div className="LoginBox">
        <figure><img src={logo} alt="Logo" /></figure>
        <h5>Let's Get Started Corner Distribution</h5>
        <h6>To keep connected with us, please login<br /> with your personal info.</h6>
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>User ID</label>
            <input 
              type="text" 
              placeholder="Enter User ID" 
              className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
              value={email} 
              onChange={(e) => setUserId(e.target.value)}
            />
            <span className="Icon"><i className="fa fa-user"></i></span>
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter Password" 
              className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <span className="Icon"><i className="fa fa-unlock-alt"></i></span>
            {errors.password && <small className="text-danger">{errors.password}</small>}
          </div>

          <button type="submit" className="btn btn-primary">
            Log In <i className="fa fa-sign-in"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
