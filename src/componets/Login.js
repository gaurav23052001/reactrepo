import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assests/Logo.png";

const Login = () => {
  const navigate = useNavigate(); // This is used to navigate to the dashboard

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the form from reloading the page
    // Add authentication logic here if necessary

    // On successful login, redirect to the dashboard
    navigate('/admin/Dashbord');
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
            <input type="text" placeholder="Enter User ID" className="form-control" />
            <span className="Icon"><i className="fa fa-user"></i></span>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter Password" className="form-control" />
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
