// import React from 'react'
import './Ex.css'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import axios from 'axios';
export class Get extends Component {

  state={
    data:[]
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8080/get1Details').then(response=>{
      this.setState({data:response.data});
    })
    .catch(error => {
      console.log(error);
    })
  }


  render() {
    return (
           <div className="tbimg">
            <br></br>
            <br></br>
      <table border={1} id="tbl">
        <thead>
          <tr>
            <th>GameId</th>
            <th>GameName</th>
            <th>Genre</th>
            <th>GamePrice</th>
            <th>GameReleased</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(user =>(
            <tr key={user.gid}>
            <td>{user.gid}</td>
            <td>{user.gname}</td>
            <td>{user.genre}</td>
            <td>{user.gprice}</td>
            <td>{user.grelease}</td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
    );
          }}
//     <div>
//     <div className="bimg1">
//     <br></br>
//       <a><Link to="Home">
//     <div className="back"></div>
//     </Link></a>
//     <h1 id="Get">Get Game info</h1>
//     {/* <h2>Get</h2> */}
//     <div id="boxP">
//     <form>
//     <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <label id="l" for="gid" >Game id:</label>
//         <br></br>
//         <input id="ip" type="text" placeholder="    Enter game id"></input>
//         {/* <br></br>
//         <br></br>
//         <label id="l" for="gname">Game name:</label>
//         <br></br>
//         <input id="ip" type="text" placeholder="    Enter game name"></input>
//         <br></br>
//         <br></br>
//         <label id="l" for="genre">Genre:</label>
//         <br></br>
//         <input id="ip" type="text" placeholder="    Enter game genre"></input>
//         <br></br>
//         <br></br>
//         <label id="l" for="gprice">Price:</label>
//         <br></br>
//         <input id="ip" type="text" placeholder="    Enter game price"></input>
//         <br></br>
//         <br></br> */}
//         <br></br>
//         <br></br>
//         <input class="smt2" type="Submit" value="Show"></input>
//         <h2>or</h2>
        
//         <input class="smt4" type="Submit" value="Show All Details"></input>
//     </form>
//     </div>
//     </div>
// </div>
    
//     )
//   }
// }

export default Get