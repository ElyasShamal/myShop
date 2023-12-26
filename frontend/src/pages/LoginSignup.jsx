import React from "react";
import "./Css/loginsignup.css";

const LoginSignup = () => {
  return (
    <div className="loginSignUp">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="lognsignup-field">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginSingUp-login">
          Already have an account ? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
