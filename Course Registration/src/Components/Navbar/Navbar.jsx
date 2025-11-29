import React from 'react'
import "../Navbar/Navbar.css"
import { Link, useNavigate } from 'react-router-dom'


function Navbar() {
  const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("stud");
        localStorage.removeItem("student");
        navigate("/home")
    };
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
              <li className="nav-item">
                <Link to={'/home'} className="nav-link">Dashboard</Link>
              </li>
            </ul>
          </div>
          <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Login
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link to={'/login'} className="btn btn-outline-primary login">Student Login</Link></li>
    <li><Link to={'/loginAdmin'} className="btn btn-outline-primary login">AdminLogin</Link></li>
 
  </ul>
</div>

<button className="btn btn-secondary login" onClick={logout}>Log Out</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
