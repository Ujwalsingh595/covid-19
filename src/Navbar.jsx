import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
const Navbar=()=>{
    return(
        <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
  <NavLink className="navbar-brand text-white" to="/">Corona Live Updates</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <NavLink exact className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact className="nav-link text-white"to="/corona">Corona Updates</NavLink>
      </li>
     
    </ul>
    
  </div></div>
</nav>
        </>
    )
}
export default Navbar;