import React from 'react'
import "../Navbar/Navbar.css"
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top NavBar " >
        <div className="container-fluid">
          <p className="navbar-brand BrandName">ACE ACADEMY</p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="nav nav-tabs">
              <li className="nav-item ">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <Link to={'/'} className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/aboutUs'} className="nav-link">About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Services</a>
                <ul className="dropdown-menu">
                  {/* <li><a className="dropdown-item" href="#">Internships</a></li> */}
                  {/* <li><a className="dropdown-item" href="#">Courses</a></li> */}
                  <li><Link to={'/viewCourses'} className="dropdown-item" >Courses</Link></li>
                  {/* <li><a className="dropdown-item" href="#">One-to-One trainer</a></li> */}
                </ul>
              </li>
            </ul>
          </div>
<Link to={'/login'} className="btn btn-outline-primary login">Login</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
