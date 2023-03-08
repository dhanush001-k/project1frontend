// import React from 'react'
import './Ex.css'
import { Link } from 'react-router-dom'

import React, { Component } from 'react'
import axios from 'axios';

export class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
        gid:'',
        gname:'',
        genre: '',
        gprice: '',
        grelease:''
    };
  }

  handleIdChange = (event) => {
    this.setState({ gid: event.target.value });
  };

  handleNameChange = (event) => {
    this.setState({ gname: event.target.value });
  };

  handleGenreChange = (event) => {
    this.setState({ genre: event.target.value });
  };

  handlePriceChange = (event) => {
    this.setState({ gprice: event.target.value });
  };

  handleReleaseChange = (event) => {
    this.setState({ grelease: event.target.value });
  };

 

  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        gid: this.state.gid,
        gname: this.state.gname,
        genre: this.state.genre,
        gprice: this.state.gprice,
        grelease: this.state.grelease,
             
      };
    
      axios.post('http://127.0.0.1:8080/post', data)
  };


  render() {
    return (
      <div>
      <div className="bimg1">
      <br></br>
        <a><Link to="Home">
      <div className="back"></div>
      </Link></a>
      <h1 id="Post">Add new Game</h1>
      {/* <h2>Put</h2> */}
      <div id="boxP">
      <form onSubmit={this.handleSubmit}>
          <label id="l" for="gid" >Game id:</label>
          <br></br>
          <input id="ip" type="text" placeholder="Enter game id" value={this.state.gid} onChange={this.handleIdChange} ></input>
          <br></br>
          <br></br>
          <label id="l" for="gname">Game name:</label>
          <br></br>
          <input id="ip" type="text" placeholder="Enter game name" value={this.state.gname} onChange={this.handleNameChange}></input>
          <br></br>
          <br></br>
          <label id="l" for="genre">Genre:</label>
          <br></br>
          <input id="ip" type="text" placeholder="Enter game genre" value={this.state.genre} onChange={this.handleGenreChange}></input>
          <br></br>
          <br></br>
          <label id="l" for="gprice">Price:</label>
          <br></br>
          <input id="ip" type="text" placeholder="Enter game price" value={this.state.gprice} onChange={this.handlePriceChange}></input>
          <br></br>
          <br></br>
          <label id="l" for="gprice">Game Released:</label>
          <br></br>
          <input id="ip" type="text" placeholder="Enter year" value={this.state.grelease} onChange={this.handleReleaseChange}></input>
          <br></br>
          <br></br>
          <button class="smt2" type="Submit">Add</button>
      </form>
      </div>
      </div>
  </div>
    )
  }
}

export default Post