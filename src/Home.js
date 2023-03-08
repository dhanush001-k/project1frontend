import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import './Ex.css'


export class Home extends Component {
  render() {
    return (
      <div>
      <div className="bimg">
        <br></br>
        <a><Link to="Login">
        <div className="logout"></div>
        </Link></a>
        <p id="hh">Gamer's Paradise</p>
        <br></br>
              <br></br>
              <br></br>
              <br></br>
            <a><Link to="Post">
             <input id="crud" type="Submit" value="Add new game"></input>
              </Link></a>
             
            <a><Link to="Put">
            <input id="crud1" type="Submit" value="Update game"></input>
              </Link></a>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            <a><Link to="Delete">
            <input id="crud" type="Submit" value="Delete a game"></input>
              </Link></a>
          
            <a><Link to="Get">
            <input id="crud1" type="Submit" value="Show game info"></input>
              </Link></a>
          
          </div>
        </div>
    
    )
  }
}

export default Home