import React, { Component } from 'react'
// import React from 'react'
import './App.css';
import Get from './Get';
import Delete from './Delete';
import Home from './Home';
import Post from './Post';
import Put from './Put';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';


function App() {
  return (
    <Router>
    <div className="App">
      {/* <Login></Login> */}
      {/* <Signup></Signup> */}
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/Signup" component={Signup}></Route>
        <Route exact path="/Home" component={Home}></Route>
        <Route exact path="/Post" component={Post}></Route>
        <Route exact path="/Put" component={Put}></Route>
        <Route exact path="/Delete" component={Delete}></Route>
        <Route exact path="/Get" component={Get}></Route>
     </Switch>
    </div>
   </Router>
  );
}

export default App;
