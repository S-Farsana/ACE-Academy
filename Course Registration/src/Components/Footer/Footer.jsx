
import React from 'react';
import './Footer.css'

function Footer() {
  return (
      <footer className="footer-custom fixed-bottom text-center text-white footer">
      <div className="container p-4 footerCont">

        {/* Company Name */}
        <h4 className="company-name">ACE Academy</h4>

        {/* Tagline */}
        <p className="tagline tag">Empowering you to write your success story</p>

        {/* Social Icons */}
        {/* <div className="social-area mt-3">
          <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="social"><i className="fab fa-instagram"></i></a>
        </div> */}

      </div>

      {/* Copyright */}
      <div className="copywrite">
        © 2025 ACE Academy. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
