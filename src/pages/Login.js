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
          <div className="login-logo">LOGO</div>
          <div className="login-form">
            <form method="post">
              <label htmlFor="zId">Z-Id: </label>
              <input type="text" name="zId" id="zId" />
              <label htmlFor="passwd">Password: </label>
              <input type="password" name="passwd" id="passwd" />
              <input type="submit" value="SUBMIT" onClick={handleSubmit} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
