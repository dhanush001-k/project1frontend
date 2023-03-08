import axios from "axios";
import react ,{useState}from "react";
import { Link } from "react-router-dom";
import './Ex.css'
function Delete() {
    const [search,setSearch]=useState("");
    const [idData,setData]=useState([]);
    const searchid=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.delete('http://127.0.0.1:8080/delete/'+search)
            .catch(err=>console.log(err))
        }
    }
  return (
    <div><>
    <div className="bimg5">
    <a><Link to="Home">
      <div className="back"></div>
      </Link></a>
     
     
<div id="boxQ">
  <br></br>
  <br></br>
                <h2 id="Del">Delete a Game</h2>
                <br></br>
                <div className="search" >
                    <input type="text" id="ip" className='k' placeholder="Enter Game Id To Delete"  value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchid}/>                    
                </div>
                
                 
            </div> 
            </div>     
        </></div>
  )
}

export default Delete