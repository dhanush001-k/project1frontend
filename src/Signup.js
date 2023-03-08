import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './Log.css'
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="baimg1">
        <br></br>
        <div className="box">
           
          <center>
         <h1>Sign Up</h1>
          </center>
    <form onSubmit={handleSubmit}>
      <input id="input1" type="text" placeholder="First Name" required></input>
      <br></br>
      <br></br>
      <br></br>
      <input id="input1" type="text" placeholder="Last Name" required></input>
      <br></br>
      <br></br>
      <br></br>
        <input id="input1" type="email" value={email} onChange={handleEmailChange} placeholder="Email" required/>
      <br></br>
      <br></br>
      <br></br>
        <input id="input1" type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required  />
        <br></br>
        <br></br>
      <br></br>
      <input id="input1" type="password" value={password} onChange={handlePasswordChange} placeholder="Confirm Password" required  />
      
      <br></br>
        <br></br>
        <br></br>
      <br></br>
      <a><Link to="Login">
      <button id="b" type="submit">Create</button>
      </Link></a>
    </form>
    </div>
    </div>
    </div>
  );
}

export default Signup;
