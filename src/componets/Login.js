import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assests/Logo.png";
import axios from 'axios';
import {toastMessage} from '../utils/toast';

const Login = () => {
  const navigate = useNavigate(); // This is used to navigate to the dashboard

  const [email, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async(e) => {
    e.preventDefault(); // Prevents the form from reloading the page
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
        email,
        password,
      });

      // Store data in localStorage
      localStorage.setItem('token', response?.data?.data?.token); 
      localStorage.setItem('user', JSON.stringify(response?.data?.data?.user));

      if(response?.data?.code === 200){
      toastMessage(response?.data?.message, "success", "ASDFG");
        navigate('/admin/Dashbord');
      }

    } catch (error) {
      if(error?.response?.data?.code === 400)
        return toastMessage(error?.response?.data?.message, "error", "ASDFG");
      if(error?.response?.data?.code == 500){ 
        toastMessage(error?.response?.data?.message, "warning", "ASDFG");
        }
      console.error('Login failed:', error);
    }
  };

//   const inputFieldHandler=(e)=>{
// const {name,value}=e.target;
// console.log(value);
// setInputField({...inputField,[name]:value})
//   }
//   console.log(inputField,"InputField");

  return (
    <div className="LoginArea">
      <div className="LoginBox">
        <figure><img src={logo} alt="Logo" /></figure>
        <h5>Let's Get Started Corner Distribution</h5>
        <h6>To keep connected with us, please login<br /> with your personal info.</h6>
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>User ID</label>
            <input type="text" placeholder="Enter User ID" className="form-control" value={email} onChange={(e) => setUserId(e.target.value)}/>
            <span className="Icon"><i className="fa fa-user"></i></span>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter Password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            <span className="Icon"><i className="fa fa-unlock-alt"></i></span>
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
