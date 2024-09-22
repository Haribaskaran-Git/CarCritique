import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Home");
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-wrapper">
          <div className="login-logo">
            <img className="logo" src="images/logo.png" alt="Logo" srcset="" />
          </div>
          <div className="login-form">
            <form  onSubmit={handleSubmit} method="POST">
              <div className="zId-input">
                <label htmlFor="zId" className="label">
                  Z-Id:<span>*</span>
                </label>
                <input type="text" name="zId" id="zId" placeholder="Enter ZId" required/>
              </div>
              <div className="passwd-input">
                <label htmlFor="passwd" className="label">
                  Password:<span>*</span>
                </label>
                <input type="password" name="passwd" id="passwd" placeholder="Password" required/>
              </div>
              <div className="btn-input">
                <input type="submit" value="SIGN IN"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
