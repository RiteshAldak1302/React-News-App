import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//always use rce shortcut  for making component in component file when you already installed ES7 extension in vs code
export class Navbar extends Component {
    render() {
        return (
            <>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{color:"#e60000" , fontSize:"25px"}}  > <strong>NewsHub</strong> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/business">business</Link>          
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/entertainment">entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/generalhealth">health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/science">science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/sports">sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/technology">technology</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
            </>
        )
    }
}

export default Navbar
