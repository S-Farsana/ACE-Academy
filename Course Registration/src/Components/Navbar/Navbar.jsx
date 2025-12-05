import React from 'react'
import "../Navbar/Navbar.css"
import logo from "/java fullstack/ACE ACADEMY/Course Registration/src/assets/image/logo.png"

import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-gradient fixed-top NavBar " >
        <div className="container-fluid">
<div className='brandBox'>
  <img className="logoImg" src={logo} alt="logo" width="100" height="100"></img>
          <p className="navbar-brand">ACE ACADEMY</p>
          <p className='tagline'>Empowering you to write your <br></br> success story.</p>
          </div>
          <button className="navbar-toggler button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="nav nav-tabs">
              <li className="nav-item ">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <Link to={'/'} className="nav-link" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/aboutUs'} className="nav-link">About Us</Link></li>
                <li className="nav-item">
                <Link to={'/dashboard'} className="nav-link">Dashboard</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Services</a>
                <ul className="dropdown-menu">
                  {/* <li><a className="dropdown-item" href="#">Internships</a></li> */}
                  {/* <li><a className="dropdown-item" href="#">Courses</a></li> */}
                  <li><Link to={'/viewCourseCandi'} className="dropdown-item" >Courses</Link></li>
                  {/* <li><a className="dropdown-item" href="#">One-to-One trainer</a></li> */}
                </ul>
              </li>
            </ul>
          </div>
          
          <div className="btn-group">
            {/* login / Register */}
  <button type="button" className="btn btn-primary dropdown-toggle button" data-bs-toggle="dropdown" aria-expanded="false">
    Login/Register
  </button>
  <ul className="dropdown-menu loginMenu">
    <li><Link to={'/login'} className="btn btn-outline-primary login">Login for Student</Link></li>
    <li><Link to={'/loginAdmin'} className="btn btn-outline-primary login">Login for Admin</Link></li>
  </ul>
  {/* logout */}
  <Link to={'/logout'} type="button" className="btn btn-primary button ">Log Out</Link>
</div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
