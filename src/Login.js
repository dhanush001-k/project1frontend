import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './Log.css'
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="baimg">
        <h1>Login Form</h1>
        <div className="box">
          <center>
          <div className="minibox">
          </div>
          </center>
    <form onSubmit={handleSubmit}>
      <br></br>
      <label id="h">
        Email:  
      </label>
      <br></br>
      <br></br>
        <input id="input1" type="email" value={email} onChange={handleEmailChange} />
      <br></br>
      <br></br>
     
      <br></br>
      <label id="h">
        Password:
      </label>
      <br></br>
      <br></br>
        <input id="input1" type="password" value={password} onChange={handlePasswordChange} required />
        <br></br>
        <br></br>
        <br></br>
        <a href="https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop">Forgot password?</a>
        <br></br>
      <br></br>
      <a><Link to="/Home">
      <button id="b" type="submit">Login</button>
      </Link></a>
    </form>
    <h2>Don't have an account?</h2>
    <a><Link to="Signup">
    <button id="b1" type="submit">Sign Up</button>
    </Link></a>
    </div>
    </div>
    </div>
  );
}

export default Login;
