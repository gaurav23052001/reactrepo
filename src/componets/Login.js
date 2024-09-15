import React from 'react'
import logo from "../assests/Logo.png"

const Login = () => {
  return (
    <div className="LoginArea">
    <div className="LoginBox">
    <figure><img src={logo} alt="Logo" /></figure>
      <h5>Let's Get Started Corner Distribution</h5>
      <h6>To keep connected with us, please login<br /> with your personal info.</h6>
      <form>
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

        <a href="dashboard.html">Log In <i className="fa fa-sign-in"></i></a>
        {/* Use a <button> for submitting forms */}
      </form>
    </div>
  </div>
  )
}

export default Login
